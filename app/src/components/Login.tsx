import axios from "axios"
import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'

import {RouteComponentProps} from "@reach/router"

import styles from "./Components.module.scss"

type Props = RouteComponentProps

export default function Login(props: Props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e: any) => {
    let formData = {
      email: email,
      password: password
    }
    axios.post("/user/login", formData).then(res => {
      props.navigate!("/timer")
    }).catch((err) =>
      alert(err.message)
    )
    e.preventDefault()
  }

  return (
    <Container className={styles.containerMargin} fluid>
      <Row className="justify-content-center">
        <Form onSubmit={onSubmit}>
          <h1>Login Below!</h1>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
