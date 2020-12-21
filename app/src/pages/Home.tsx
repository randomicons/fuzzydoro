import React from "react"
import {RouteComponentProps} from "@reach/router"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import styles from "./Home.module.scss"

type Props = RouteComponentProps

function Home(props: Props) {
  return (
    <Container  className={styles["container-margin"]}fluid>
      <Row className="justify-content-center">
        <h1>Making Time Blocking Work For You</h1>
      </Row>
      <Row className="justify-content-center">
        <Button className={styles["button-margin"]} variant="danger" href="/timer"><h4>Try it Now!</h4></Button>
      </Row>
    </Container>
  )
}


export default Home
