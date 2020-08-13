import React, {useState} from "react"


interface makeTimerProps {
    onSubmit: any
}

export default function MakeTimer(props: makeTimerProps) {

  const [timerLength, setTimerLength] = useState(0)
  const [snoozeLength, setSnoozeLength] = useState(0)
  const [taskName, setTaskName] = useState('')

  // const onSubmit = (e: any) => {
  //   return (
  //       <Timer
  //         originalTime={timerLength}
  //         snoozeTime={snoozeLength}
  //         taskName={taskName} />
  //   )
  // }

  return (
    <form onSubmit={props.onSubmit}>
      <h1>Customize your timer!</h1>
      <label>
        Timer Length (up to 60 minutes) <br/>
        <input
          type="number"
          name="timerLength"
          placeholder="0"
          min="0"
          max="60"
          value={timerLength}
          onChange={(e) => setTimerLength(parseInt(e.target.value))}
          required
        />
      </label>
      <br />
      <br />
      <label>
        Snooze Length (up to 60 minutes) <br/>
        <input
          type="number"
          name="snoozeLength"
          placeholder="0"
          min="0"
          max="60"
          value={snoozeLength}
          onChange={(e) => setSnoozeLength(parseInt(e.target.value))}
          required
        />
      </label>
      <br />
      <br />
      <label>
        Task Name <br/>
        <input
          type="Text"
          name="taskName"
          placeholder="..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}
