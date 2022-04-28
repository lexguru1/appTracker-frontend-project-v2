import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  deleteApplication,
  updateApplication,
} from "../../store/applicationsList/actions";
import { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function JobCard(props) {
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [jd, setJd] = useState("");
  const [status, setStatus] = useState("");
  return (
    <>
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        aria-labelledby="dialog1Title"
        aria-describedby="dialog1Desc"
      >
        <button
          style={{
            backgroundColor: "#0d5c63",
            border: "0px",
            color: "white",
            margin: "10px",
          }}
          className="close-button"
          onClick={close}
        >
          <span aria-hidden>×</span>
        </button>
        <br />
        <Container>
          <Form.Group controlId="formBasicPosition" className="form-padding">
            <Form.Label>Position</Form.Label>
            <Form.Control value={position} />
          </Form.Group>
          <Form.Group controlId="formBasicCompany" className="form-padding">
            <Form.Label>Company</Form.Label>
            <Form.Control value={company} />
          </Form.Group>
          <Form.Group controlId="formBasicDescription" className="form-padding">
            <Form.Label>Description</Form.Label>
            <Form.Control value={jd} />
          </Form.Group>

          <Form.Group controlId="formBasicStatus" className="form-padding">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Select status of your application</option>
              <option value="APPLIED">APPLIED</option>
              <option value="PHONE">PHONE</option>
              <option value="TECH">TECH</option>
              <option value="HIRED">HIRED</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-5 form-padding">
            <Button
              onClick={() => {
                dispatch(updateApplication(props.id, status));
                setShowDialog(false);
              }}
              type="submit"
              style={{ backgroundColor: "#0d5c63", border: "0px" }}
            >
              Update application status
            </Button>
          </Form.Group>
        </Container>
      </Dialog>
      <Card style={{ width: "26rem", maxHeight: "15rem" }}>
        <Card.Body>
          <Card.Title>{props.position}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.company}
          </Card.Subtitle>
          <Card.Text>{props.jd}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Status: {props.status}
          </Card.Subtitle>
          <Card.Text>Applied on: {props.date}</Card.Text>
          <Button
            onClick={() => {
              dispatch(deleteApplication(props.id));
            }}
            type="submit"
            style={{ backgroundColor: "#0d5c63", border: "0px" }}
          >
            Delete application
          </Button>{" "}
          <Button
            onClick={() => {
              setShowDialog(true);
              setPosition(props.position);
              setCompany(props.company);
              setJd(props.jd);
              setStatus(props.status);
            }}
            style={{ backgroundColor: "#0d5c63", border: "0px" }}
          >
            Edit application
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
