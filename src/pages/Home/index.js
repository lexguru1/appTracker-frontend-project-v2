import "./styles.css";
import { Button } from "react-bootstrap";
import { image } from "../../assets/jason-goodman-X8H8vPcelPk-unsplash.jpg";
import { Link } from "react-router-dom";

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
              <Link
                to="/signup"
                style={{
                  textAlign: "center",
                  color: "#0d5c63",
                  border: "1.5px solid #0d5c63",
                  padding: "10px",
                  borderRadius: "10px",
                }}
                className="form-padding"
              >
                Click here to sign up
              </Link>
            </div>
          </div>
          <div className="main-homepage-container-image"></div>
        </div>
      </div>
    </>
  );
}
