import React from "react"
import {navigate, Router} from "@reach/router"
import styles from "./App.module.scss"
import Home from "./Home";

import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Timer from "../components/Timer"

export default function App() {

  return (
    <>
      <header>
        <h1 onClick={() => navigate("/")}>Fuzzydoro</h1>
      </header>
      <div className={styles.main}>
        <Router>
          <Home path={"/"}/>
          <SignUp path={"/signup"}/>
          <Login path={"/login"}/>
          <Timer path={"/timer"}/>
        </Router>
      </div>
    </>
  )
}
