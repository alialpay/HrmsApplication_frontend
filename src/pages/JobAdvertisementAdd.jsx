import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import { FormField, Button, Label, Dropdown, Select } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';
import CityService from '../services/cityService';




export default function JobAdvertisementAdd() {
    const initialValues = { title: "" }

    const workingType = [
        { key: 1, text: "Tam Zamanlı", value: 1 },
        { key: 2, text: "Yarı Zamanlı", value: 2 }
    ]
    const workingTime = [
        { key: 1, text: "Uzaktan", value: 1 },
        { text: "Ofis", key: 0, value: 0 }
    ]
    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then(result => setCities(result.data.data.map((city) => {
            return { text: city.cityName, key: city.id, value: city.id }
        })
        ))
    }, [])

    const schema = Yup.object({
        title: Yup.string().required("Pozisyon adı zorunlu"),
        jobDescription: Yup.string().required("İlan açıklaması zorunlu"),
        minSalary: Yup.number().required("Minimum maaş limiti zorunlu"),
        maxSalary: Yup.number().required("Minimum maaş limiti zorunlu"),
        numberOfOpenPosition: Yup.number().required("Açık pozisyon adedi zorunlu"),
        createdAt: Yup.date().required("Yayın tarihi zorunlu"),
        applicationDeadline: Yup.date().required("Son başvuru tarihi zorunlu")

    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="title" placeholder="Pozisyon adı" />
                    <KodlamaIoTextInput name="jobDescription" placeholder="Açıklama" />
                    <KodlamaIoTextInput name="minSalary" placeholder="Min. maaş" />
                    <KodlamaIoTextInput name="maxSalary" placeholder="Max. maaş" />
                    <KodlamaIoTextInput name="numberOfOpenPosition" placeholder="Açık pozisyon adedi" />
                    <KodlamaIoTextInput name="createdAt" placeholder="Yayınlanma tarihi" />
                    <KodlamaIoTextInput name="applicationDeadline" placeholder="Son başvuru" />

                    <FormField>
                    <label>Şehirler</label>
                        <Dropdown
                            clearable
                            fludi
                            multiple
                            search
                            selection
                            options={cities}
                            placeholder="Şehir Seçiniz" />
                    </FormField>

                    <FormField>
                    <label>Çalışma Tipi</label>
                        <Select placeholder='Çalışma Tipi Seçiniz' options={workingTime} />
                    </FormField>

                    <FormField>
                    <label>Çalışma Zamanı</label>
                        <Select placeholder='Çalışma Zamanı Seçiniz' options={workingType} />
                    </FormField>


                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>

        </div>
    )
}
