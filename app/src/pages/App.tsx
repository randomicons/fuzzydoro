import React, { useState, useEffect } from "react"
import {navigate, Router} from "@reach/router"
import styles from "./App.module.scss"
import Home from "./Home";


export default function App() {

  const [apiResponse, setAPIResponse] = useState('');

  useEffect(() => {
      fetch('http://localhost:9000/testAPI').then(res => res.text()).then(data => {
          setAPIResponse(data)
      })
  }, [])

  return (
    <>
      <header>
        <h1 onClick={() => navigate("/")}>Fuzzydoro</h1>
        <p>{apiResponse}</p>
      </header>
      <div className={styles.main}>
        <Router>
          <Home path={"/"}/>
        </Router>
      </div>
    </>
  )
}
