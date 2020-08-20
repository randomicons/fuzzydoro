import axios from "axios"
import React, {useState} from "react"
import {RouteComponentProps} from "@reach/router"


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
      <label>
          Retype Password <br/>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={retypedPassword}
          onChange={(e) => setRetypedPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}
