import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { FormField, Button, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function Register() {
  const initialValues = { firstName: "", lastName: "" }

  const schema = Yup.object({
    productName: Yup.string().required("zorunlu"),
    unitPrice: Yup.string().required("zorunlu")
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="firstName" placeholder="İsim" />
        <KodlamaIoTextInput name="lastName" placeholder="Soyisim" />

        <Button color="green" type="submit">Ekle</Button>
      </Form>
    </Formik>
  );
}
