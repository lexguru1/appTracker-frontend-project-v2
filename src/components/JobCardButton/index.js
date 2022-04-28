import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function JobCardButton(props) {
  return (
    <>
      <Card style={{ width: "26rem" }}>
        <Card.Body>
          <Card.Title>position</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">company</Card.Subtitle>
          <Card.Text>jd</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Status: APPLIED / PHONE / TECH / HIRED
          </Card.Subtitle>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
