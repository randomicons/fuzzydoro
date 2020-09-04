import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'


interface makeTimerProps {
    onSubmit: any
}

export default function MakeTimer(props: makeTimerProps) {

  const [timerLength, setTimerLength] = useState(25)
  const [snoozeLength, setSnoozeLength] = useState(9)
  const [taskName, setTaskName] = useState('')

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Form onSubmit={props.onSubmit}>
          <h1>Customize your timer!</h1>
          <Form.Group>
            <Form.Label>Timer Length (up to 60 minutes)</Form.Label>
            <Form.Control
              type="number"
              name="timerLength"
              placeholder="0"
              min="1"
              max="60"
              value={timerLength}
              onChange={(e) => setTimerLength(parseInt(e.target.value))}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Snooze Length (up to 60 minutes)</Form.Label>
            <Form.Control
              type="number"
              name="snoozeLength"
              placeholder="0"
              min="1"
              max="60"
              value={snoozeLength}
              onChange={(e) => setSnoozeLength(parseInt(e.target.value))}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="Text"
              name="taskName"
              placeholder="..."
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
