import React from "react"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import {isLoggedIn} from "../util/util-funtions"


export default function NavbarManager(props: any) {

  const publicNavbar = (
    <Nav className="ml-auto">
      <Button href="/signup" variant="outline-primary">Sign Up</Button>
      <Button href="/login" variant="outline-success">Login</Button>
    </Nav>
  )
  const privateNavbar = (
    <Nav className="mr-auto">
      <Nav.Link href="/timer">Timer</Nav.Link>
    </Nav>
  )

  const renderNavbarLinks = () => {
    if (isLoggedIn()) {
      return privateNavbar
    } else  {
      return publicNavbar
    }
  }

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Fuzzydoro</Navbar.Brand>
      {renderNavbarLinks()}
    </Navbar>
  )
}

