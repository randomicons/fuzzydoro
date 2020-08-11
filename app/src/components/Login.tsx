import axios from "axios"
import React, {useState} from "react"
import {RouteComponentProps} from "@reach/router"


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
    <form onSubmit={onSubmit}>
      <h1>Login Below!</h1>
      <label>
          Email <br/>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <br />
      <label>
          Password <br/>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}
