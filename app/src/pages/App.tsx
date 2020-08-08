import React from "react"
import {navigate, Router} from "@reach/router"
import styles from "./App.module.scss"
import Home from "./Home";

import Timer from "../components/Timer"

export default function App() {

  return (
    <>
      <header>
        <h1 onClick={() => navigate("/")}>Fuzzydoro</h1>
        <Timer />
      </header>
      <div className={styles.main}>
        <Router>
          <Home path={"/"}/>
        </Router>
      </div>
    </>
  )
}
