import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchApplications,
  createApplication,
} from "../../store/applicationsList/actions";
import Button from "react-bootstrap/Button";
import { ResponsiveBar } from "@nivo/bar";
import { Doughnut } from "react-chartjs-2";
import { selectUserId } from "../../store/user/selectors";
import { selectToken, selectUser } from "../../store/user/selectors";
import Loading from "../../components/Loading";
import LogoutMessage from "../../components/LogoutMessage";
import { selectApplications } from "../../store/applicationsList/selectors";
import { selectAppLoading } from "../../store/appState/selectors";
import JobCard from "../../components/JobCard";
import { Form, Container } from "react-bootstrap";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
export default function Dashboard() {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialogStats, setShowDialogStats] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [jd, setJd] = useState("");
  const [status, setStatus] = useState("");
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const openStats = () => setShowDialogStats(true);
  const closeStats = () => setShowDialogStats(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectAppLoading);
  const applications = useSelector(selectApplications);

  if (applications.applications) {
    var appStatusAPPLIED = applications.applications.filter((app) => {
      return app.status === "APPLIED";
    });
    var appStatusPHONE = applications.applications.filter((app) => {
      return app.status === "PHONE";
    });
    var appStatusTECH = applications.applications.filter((app) => {
      return app.status === "TECH";
    });
    var appStatusHIRED = applications.applications.filter((app) => {
      return app.status === "HIRED";
    });
    var dataArray = [
      { status: "APPLIED", count: appStatusAPPLIED.length },
      { status: "PHONE", count: appStatusPHONE.length },
      { status: "TECH", count: appStatusTECH.length },
      { status: "HIRED", count: appStatusHIRED.length },
    ];
  }
  console.log(applications);
  console.log("app with status applied:", appStatusAPPLIED);
  console.log("app with status phone:", appStatusPHONE);
  console.log("app with status tech:", appStatusTECH);
  console.log("app with status hired:", appStatusHIRED);

  console.log("data", dataArray);
  if (applications.id) {
    var appListId = applications.id;
  }
  // console.log(appListId);
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);
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
            <Form.Control
              onChange={(e) => setPosition(e.target.value)}
              type="text"
              placeholder="Enter position"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicCompany" className="form-padding">
            <Form.Label>Company</Form.Label>
            <Form.Control
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Enter company"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicDescription" className="form-padding">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setJd(e.target.value)}
              type="text"
              placeholder="Enter job description"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicStatus" className="form-padding">
            ShowSuccessMessage
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
                dispatch(
                  createApplication(company, position, status, jd, appListId)
                );
                setShowDialog(false);
                setShowSuccessMessage(true);
              }}
              type="submit"
              style={{ backgroundColor: "#0d5c63", border: "0px" }}
            >
              Add application
            </Button>
          </Form.Group>
        </Container>
      </Dialog>
      <Dialog
        isOpen={showDialogStats}
        onDismiss={closeStats}
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
          onClick={closeStats}
        >
          <span aria-hidden>×</span>
        </button>
        <br />
        <Container style={{ height: "700px", color: "#0d5c63" }}>
          <h1>Number of applications by status</h1>
          <ResponsiveBar
            data={dataArray}
            keys={["count"]}
            indexBy="status"
            margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            colors="#0d5c63"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={null}
          />
        </Container>
      </Dialog>
      <>{isLoading ? <Loading /> : null}</>
      <>{!token ? <LogoutMessage /> : null}</>
      <>
        {token && applications.applications ? (
          <div className="main-container">
            <h1>
              Welcome to your dashboard, {user.name}!{" "}
              {applications.applications.length === 0 ? null : (
                <>
                  <Button
                    onClick={() => openStats()}
                    style={{ backgroundColor: "#0d5c63", border: "0px" }}
                  >
                    See statistics
                  </Button>{" "}
                  <Button
                    onClick={() => open()}
                    style={{ backgroundColor: "#0d5c63", border: "0px" }}
                  >
                    Add new application
                  </Button>
                </>
              )}
            </h1>

            <div className="container-cards">
              {applications.applications.length === 0 ? (
                <>
                  {" "}
                  <div className="container-cards-no-apps">
                    <h3>
                      You application list is empty, make sure you add some soon
                    </h3>
                    <div>
                      <Button
                        onClick={() => open()}
                        style={{ backgroundColor: "#0d5c63", border: "0px" }}
                      >
                        Add your first application
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                applications.applications.map((app) => {
                  var dateRender = new Date(app.createdAt);
                  var dateRenderComp = dateRender.toLocaleDateString();

                  return (
                    <JobCard
                      key={app.id}
                      position={app.position}
                      company={app.company}
                      jd={app.jd}
                      status={app.status}
                      date={dateRenderComp}
                      id={app.id}
                    />
                  );
                })
              )}
            </div>
          </div>
        ) : null}{" "}
      </>
    </>
  );
}
