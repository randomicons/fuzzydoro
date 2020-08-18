import axios from "axios"
import React from "react"


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

export default class Timer extends React.Component<timerProps, timerState> {

  audio = new Audio('/alarm.mp3')
  minute = 60000
  second = 1000
  timerID = 0

  constructor(props: timerProps) {
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
          <button onClick={() => this.stop()}>Stop</button>
        )
      } else {
        return (
          <button onClick={() => this.tick(false)}>Start</button>
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
    this.setState((state, props) => ({timeRemaining: this.state.snoozeTime}))
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
      <>
        <p>{minutes}:{seconds_string}</p>
        {this.renderStartStopButton()}
        {this.renderSnoozeButton()}
        <button onClick={() => this.reset()}>Reset</button>
      </>
    )
  }
}
