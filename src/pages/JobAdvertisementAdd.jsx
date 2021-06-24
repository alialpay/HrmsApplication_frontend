import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup";
import { FormField, Button, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function JobAdvertisementAdd() {
    const initialValues = { title: ""}

    const schema = Yup.object({
        title: Yup.string().required("Pozisyon adı zorunlu"),
        jobDescription: Yup.string().required("İlan açıklaması zorunlu"),
        minSalary: Yup.number().required("Minimum maaş limiti zorunlu"),
        maxSalary: Yup.number().required("Minimum maaş limiti zorunlu"),
        numberOfOpenPosition: Yup.number().required("Açık pozisyon adedi zorunlu"),
        createdAt: Yup.date().required("Yayın tarihi zorunlu"),
        applicationDeadline: Yup.date().required("Son başvuru tarihi zorunlu"),
        employer: Yup.string().required("Kurum adı zorunlu"),
        city: Yup.string().required("Şehir bilgisi zorunlu")
        
    })

    return (
        <div>
        İlan Ekleme İşlemi
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
                <KodlamaIoTextInput name="city" placeholder="Şehir" />
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
        </div>
    )
}
