import React, {useState} from "react"
import {Redirect, RouteComponentProps} from "@reach/router"

import MakeTimer from '../components/MakeTimer'
import Timer from '../components/Timer'

import {isLoggedIn} from '../util/util-funtions'


type Props = RouteComponentProps

export default function TimerPage(props: Props) {

  const [timerLength, setTimerLength] = useState(0)
  const [snoozeLength, setSnoozeLength] = useState(0)
  const [taskName, setTaskName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: any) => {
    setSubmitted(true)
    setTimerLength(e.target.timerLength.value)
    setSnoozeLength(e.target.snoozeLength.value)
    setTaskName(e.target.taskName.value)
    e.preventDefault()
  }

  if (!isLoggedIn()) {
    return <Redirect to="/login" noThrow />
  } else if (!submitted) {
    return <MakeTimer onSubmit={onSubmit} />
  } else {
    return (
        <Timer
          originalTime={timerLength}
          snoozeTime={snoozeLength}
          taskName={taskName}
        />
    )
  }

}
