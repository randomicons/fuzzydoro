import React from "react"
import {RouteComponentProps} from "@reach/router"


type Props = RouteComponentProps

interface timerState {
    timeRemaining: number
    running: boolean
}

export default class Timer extends React.Component<Props, timerState> {

  audio = new Audio('/alarm.mp3')
  minute = 60000
  second = 1000
  timerID = 0
  originalTime = 0.1 * this.minute
  snoozeTime = 0.05 * this.minute

  constructor(props : Props) {
    super(props)
    this.state = {
      timeRemaining: this.originalTime,
      running: false
    }
  }

  tick() {
    this.timerID = window.setInterval(() => {
      if (this.state.timeRemaining === 0 || this.state.timeRemaining < 0) {
        clearInterval(this.timerID)
        this.setState((state, props) => ({running: false}))
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
          <button onClick={() => this.stop()}>Stop</button>
        )
      } else {
        return (
          <button onClick={() => this.tick()}>Start</button>
        )
      }
    } else {
      return null
    }
  }

  renderSnoozeButton = () => {
    if (this.state.timeRemaining <= 0) {
      return (
        <button onClick={() => this.snooze()}>Snooze</button>
      )
    } else {
      return null
    }
  }

  snooze() {
    this.setState((state, props) => ({timeRemaining: this.snoozeTime}))
    this.tick()
  }

  reset() {
    clearInterval(this.timerID)
    this.setState((state, props) => ({
      running: false,
      timeRemaining: this.originalTime
    }))
  }

  render() {
    let minutes = Math.floor(this.state.timeRemaining / this.minute)
    let seconds = Math.floor(this.state.timeRemaining % this.minute / this.second)
    let seconds_string = seconds < 10 ? '0' + seconds : '' + seconds

    return (
      <>
        <p>{minutes}:{seconds_string}</p>
        {this.renderStartStopButton()}
        {this.renderSnoozeButton()}
        <button onClick={() => this.reset()}>Reset</button>
      </>
    )
  }
}
