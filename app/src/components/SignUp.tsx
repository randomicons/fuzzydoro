import axios from "axios"
import React, {useState} from "react"
import {RouteComponentProps} from "@reach/router"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'


type Props = RouteComponentProps

export default function SignUp(props: Props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [retypedPassword, setRetypedPassword] = useState('')

  const onSubmit = (e: any) => {
    if (password !== retypedPassword) {
      alert("Your passwords do not match.")
      return
    }
    let formData = {
      email: email,
      password: password
    }
    axios.post("/user/signup", formData).then(res => {
      props.navigate!("/timer")
    }).catch((err) =>
      alert(err.message)
    )
    e.preventDefault()
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Form onSubmit={onSubmit}>
          <h1>Sign Up Below!</h1>
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
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={retypedPassword}
              onChange={(e) => setRetypedPassword(e.target.value)}
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
