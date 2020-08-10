import axios from "axios"
import React, {useState} from "react"
import {Redirect, RouteComponentProps} from "@reach/router"


let onSubmit = (form: any) => {
  debugger;
  axios.post('/login', form).then(res => {
    if (res.status === 200) {
      return <Redirect to='/login' />
    } else {
      return null
    }
  })
}

type Props = RouteComponentProps

export default function Login(props: Props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up Below!</h1>
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
