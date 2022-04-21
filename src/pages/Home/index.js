import "./styles.css";
import { Button } from "react-bootstrap";
import { image } from "../../assets/jason-goodman-X8H8vPcelPk-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div className="main-homepage">
        <div className="main-homepage-container">
          <div className="main-homepage-container-text">
            <div className="main-homepage-container-text-flex">
              <h1 className="main-homepage-container-text-flex-h">
                The fastest way to track all your job applications
              </h1>
              <p>
                appTracker is the all-in-one job application tracking solution
                that makes every step of your job search easier.{" "}
              </p>
              <Button
                href="/signup"
                className="call-to-action"
                style={{
                  backgroundColor: "white",
                  width: "200px",
                  borderColor: "#0d5c63",
                }}
              >
                Try it for free
              </Button>
            </div>
          </div>
          <div className="main-homepage-container-image"></div>
        </div>
      </div>
    </>
  );
}
