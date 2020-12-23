import axios from "axios"
import React from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

import styles from "./Components.module.scss"


interface TimerProps {
  originalTime: number
  snoozeTime: number
  taskName: String
}

interface TimerState {
  originalTime: number
  timeRemaining: number
  snoozeTime: number
  running: Boolean
  taskName: String
}

export default class Timer extends React.Component<TimerProps, TimerState> {

  audio = new Audio('/alarm.mp3')
  minute = 60000
  second = 1000
  timerID = 0

  constructor(props: TimerProps) {
    super(props)
    this.state = {
      originalTime: props.originalTime * this.minute,
      timeRemaining: props.originalTime * this.minute,
      snoozeTime: props.snoozeTime * this.minute,
      running: false,
      taskName: props.taskName
    }
  }

  saveTimer = (snooze: boolean) => {
    let timerData = {
      name: this.state.taskName,
      startTime: new Date(),
      duration: 0
    }
    if (snooze) {
      timerData["duration"] = this.props.snoozeTime
    } else {
      timerData["duration"] = this.props.originalTime
    }
    axios.post("/task", timerData).catch((err) =>
      alert(err.message)
    )
  }

  tick(snooze: boolean) {
    this.timerID = window.setInterval(() => {
      if (this.state.timeRemaining === 0 || this.state.timeRemaining < 0) {
        clearInterval(this.timerID)
        this.setState((state, props) => ({running: false}))
        this.saveTimer(snooze)
        this.audio.play()
      } else {
        this.setState(
          (state, props) => ({
            timeRemaining: state.timeRemaining - 1000,
            running: true
          })
        )
      }
    }, this.second)
  }

  stop() {
    if (this.state.running) {
      clearInterval(this.timerID)
      this.setState((state, props) => ({running: false}))
    } else {
      return null
    }
  }

  renderStartStopButton = () => {
    if (this.state.timeRemaining > 0) {
      if (this.state.running) {
        return (
          <Button onClick={() => this.stop()}>Stop</Button>
        )
      } else {
        return (
          <Button onClick={() => this.tick(false)}>Start</Button>
        )
      }
    } else {
      return null
    }
  }

  renderSnoozeButton = () => {
    if (this.state.timeRemaining <= 0) {
      return (
        <div style={{margin: "5px"}}>
          <p>Snooze</p>
          <Button onClick={() => this.snooze(this.state.snoozeTime)}>
            {this.state.snoozeTime / 60 / 1000} mins
          </Button>
          &nbsp;
          <Button onClick={() => this.snooze(5 * 60 * 1000)}>5 mins</Button>
          &nbsp;
          <Button onClick={() => this.snooze(10 * 60 * 1000)}>10 mins</Button>
          &nbsp;
          <Button onClick={() => this.snooze(15 * 60 * 1000)}>15 mins</Button>
        </div>
      )
    } else {
      return null
    }
  }

  snooze(time: number) {
    this.setState((state, props) => ({timeRemaining: time}))
    this.tick(true)
  }

  reset() {
    clearInterval(this.timerID)
    this.setState((state, props) => ({
      running: false,
      timeRemaining: this.state.originalTime
    }))
  }

  render() {
    let minutes = Math.floor(this.state.timeRemaining / this.minute)
    let seconds = Math.floor(this.state.timeRemaining % this.minute / this.second)
    let seconds_string = seconds < 10 ? '0' + seconds : '' + seconds

    return (
      <Container className={styles.containerMargin} fluid>
        <Row className="justify-content-center">
          <h1 className={`text-center ${styles.timer}`}>{minutes}:{seconds_string}</h1>
        </Row>
        <Row className="justify-content-center">
          <Button variant="danger" onClick={() => this.reset()}>Reset</Button>
          &nbsp;
          {this.renderStartStopButton()}
        </Row>
        <Row className="justify-content-center">
          {this.renderSnoozeButton()}
        </Row>
      </Container>
    )
  }
}
