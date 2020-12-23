import React from "react"
import {RouteComponentProps} from "@reach/router"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"

import styles from "./Home.module.scss"

type Props = RouteComponentProps

function Home(props: Props) {
  return (
    <>
      <Container className={styles.containerMargin} fluid>
        <Row className="justify-content-center">
          <h1>Making Time Blocking Work For You</h1>
        </Row>
        <Row className="justify-content-center">
          <Button className={styles.buttonMargin} variant="danger" href="/timer"><h4>Try it Now!</h4></Button>
        </Row>
      </Container>
      <Container className={styles.containerMargin} fluid>
        <Row className="justify-content-center">
          <h3>Measure your productivity, without the stress</h3>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Image className={styles.landingImage} src={process.env.PUBLIC_URL + 'timer_screenshot.png'} alt="Screenshot of Timer" />
          </Col>
          <Col>
            <Image className={styles.landingImage} src={process.env.PUBLIC_URL + 'snooze_screenshot.png'} alt="Screenshot of Snooze" />
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default Home
