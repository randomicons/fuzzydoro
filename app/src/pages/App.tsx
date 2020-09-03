import React from "react"
import {Router} from "@reach/router"
import styles from "./App.module.scss"
import Home from "./Home";
import TimerPage from "./TimerPage"


import Login from "../components/Login"
import NavbarManager from "../components/NavbarManager"
import SignUp from "../components/SignUp"

import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {


  return (
    <>
      <NavbarManager />
      <div className={styles.main}>
        <Router>
          <Home path={"/"}/>
          <SignUp path={"/signup"}/>
          <Login path={"/login"}/>
          <TimerPage path={"/timer"}/>
        </Router>
      </div>
    </>
  )
}
