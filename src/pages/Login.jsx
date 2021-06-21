import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function Login() {
  return (
    <div>
      <Header as="h2" color="teal" textAlign="center">
        Giriş Yap
      </Header>
      <Form size="large">
        <Segment stacked>
          <label><b>Email</b></label>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail adresi"
          />
          <label><b>Şifre</b></label>
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Şifre"
            type="password"
          />

          <Button primary fluid size="large" disabled>
            Giriş Yap
          </Button>
        </Segment>
      </Form>
      <Message info>
        Kayıtlı değilmisin? <b><Link to={"/register"}>Şimdi Kaydol</Link></b>
      </Message>
    </div>
  );
}