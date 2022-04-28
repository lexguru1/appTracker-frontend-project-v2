import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function JobCardAdd(props) {
  return (
    <>
      <Card
        style={{
          width: "26rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
        }}
      >
        <Button
          onClick={() => props.open}
          style={{ backgroundColor: "#0d5c63", border: "0px" }}
        >
          Add a new card
        </Button>
      </Card>
    </>
  );
}
