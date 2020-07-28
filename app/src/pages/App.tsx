import React from "react"
import {navigate, Router} from "@reach/router"
import styles from "./App.module.scss"
import Home from "./Home";


export default function App() {
  return (
    <>
      <header>
        <h1 onClick={() => navigate("/")}>Fuzzydoro</h1>
      </header>
      <div className={styles.main}>
        <Router>
          <Home path={"/"}/>
        </Router>
      </div>
    </>
  )
}
