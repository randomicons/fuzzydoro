import axios from "axios"
import React, {useState} from "react"
import {RouteComponentProps} from "@reach/router"


type Props = RouteComponentProps

export default function SignUp(props: Props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    let formData = {
      email: email,
      password: password
    }
    console.log(JSON.stringify(formData))
    debugger;
    axios.post("/signup", formData).then(res => {
      props.navigate("/login")
    }).catch((err) =>
      alert(err.message)
    )
  }

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
