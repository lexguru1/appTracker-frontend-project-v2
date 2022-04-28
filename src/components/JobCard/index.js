import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteApplication } from "../../store/applicationsList/actions";

export default function JobCard(props) {
  const dispatch = useDispatch();
  return (
    <>
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
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
