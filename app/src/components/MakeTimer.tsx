import React, {useState} from "react"


interface makeTimerProps {
    onSubmit: any
}

export default function MakeTimer(props: makeTimerProps) {

  const [timerLength, setTimerLength] = useState(25)
  const [snoozeLength, setSnoozeLength] = useState(9)
  const [taskName, setTaskName] = useState('')

  return (
    <form onSubmit={props.onSubmit}>
      <h1>Customize your timer!</h1>
      <label>
        Timer Length (up to 60 minutes) <br/>
        <input
          type="number"
          name="timerLength"
          placeholder="0"
          min="1"
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
          min="1"
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
