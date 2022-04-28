// import "./style.css";
// import axios from "axios";
// import { apiUrl } from "../../config/constants";
// import Loading from "../../components/Loading";
// import LogoutMessage from "../../components/LogoutMessage";
// import {
//   fetchAppLists,
//   fetchAppList,
//   createApplication,
// } from "../../store/appList/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { selectAppLoading } from "../../store/appState/selectors";
// import { selectToken } from "../../store/user/selectors";
// import { selectUser } from "../../store/user/selectors";
// import { selectAppLists } from "../../store/appList/selectors";
// import JobCard from "../../components/JobCard";
// import Button from "react-bootstrap/Button";
// import { Dialog } from "@reach/dialog";
// import "@reach/dialog/styles.css";
// import { Container, Form } from "react-bootstrap";

// import React, { useEffect, useState } from "react";
// export default function Dashboard() {
//   const [showDialog, setShowDialog] = React.useState(false);
//   const [position, setPosition] = useState("");
//   const [company, setCompany] = useState("");
//   const [jd, setJd] = useState("");
//   const [status, setStatus] = useState("");
//   const open = () => setShowDialog(true);
//   const close = () => setShowDialog(false);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (user.id) {
//       dispatch(fetchAppList(user.id));
//     }
//   }, [dispatch]);

//   const user = useSelector(selectUser);
//   const appListsCollection = useSelector(selectAppLists);
//   console.log(appListsCollection);
//   if (appListsCollection) {
//     var applications = appListsCollection;
//   }
//   // console.log(showDialog);
//   // if (user.id) {
//   //   var appListOfLoggedUser = appListsCollection.find((list) => {
//   //     return list.userId === user.id;
//   //   });
//   // }
//   if (applications) {
//     var appListId = applications.id;
//   }
//   // console.log(appListId);
//   // console.log(position);
//   // console.log(company);
//   // console.log(jd);
//   // console.log(status);
//   const token = useSelector(selectToken);
//   const isLoading = useSelector(selectAppLoading);
//   return (
//     <>
//       <Dialog
//         isOpen={showDialog}
//         onDismiss={close}
//         aria-labelledby="dialog1Title"
//         aria-describedby="dialog1Desc"
//       >
//         <button
//           style={{
//             backgroundColor: "#0d5c63",
//             border: "0px",
//             color: "white",
//             margin: "10px",
//           }}
//           className="close-button"
//           onClick={close}
//         >
//           <span aria-hidden>×</span>
//         </button>
//         <br />
//         <Container>
//           <Form.Group controlId="formBasicPosition" className="form-padding">
//             <Form.Label>Position</Form.Label>
//             <Form.Control
//               onChange={(e) => setPosition(e.target.value)}
//               type="text"
//               placeholder="Enter position"
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formBasicCompany" className="form-padding">
//             <Form.Label>Company</Form.Label>
//             <Form.Control
//               onChange={(e) => setCompany(e.target.value)}
//               type="text"
//               placeholder="Enter company"
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formBasicDescription" className="form-padding">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               onChange={(e) => setJd(e.target.value)}
//               type="text"
//               placeholder="Enter job description"
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicStatus" className="form-padding">
//             <Form.Label>Status</Form.Label>
//             <Form.Select
//               aria-label="Default select example"
//               onChange={(e) => setStatus(e.target.value)}
//             >
//               <option>Select status of your application</option>
//               <option value="APPLIED">APPLIED</option>
//               <option value="PHONE">PHONE</option>
//               <option value="TECH">TECH</option>
//               <option value="HIRED">HIRED</option>
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mt-5 form-padding">
//             <Button
//               onClick={() =>
//                 dispatch(
//                   createApplication(company, position, status, jd, appListId)
//                 )
//               }
//               type="submit"
//               style={{ backgroundColor: "#0d5c63", border: "0px" }}
//             >
//               Add new application
//             </Button>
//           </Form.Group>
//         </Container>
//       </Dialog>
//       <>{isLoading ? <Loading /> : null}</>
//       <>{!token ? <LogoutMessage /> : null}</>
//       <>
//         {token ? (
//           <div className="main-container">
//             <h1>
//               Welcome to your dashboard, {user.name}{" "}
//               {applications?.applications.length === 0 ? null : (
//                 <Button
//                   onClick={() => open()}
//                   style={{ backgroundColor: "#0d5c63", border: "0px" }}
//                 >
//                   +
//                 </Button>
//               )}
//             </h1>

//             <div className="container-cards">
//               {applications?.applications.length === 0 ? (
//                 <>
//                   {" "}
//                   <div className="container-cards-no-apps">
//                     <h3>
//                       You application list is empty, make sure you add some soon
//                     </h3>
//                     <div>
//                       <Button
//                         onClick={() => open()}
//                         style={{ backgroundColor: "#0d5c63", border: "0px" }}
//                       >
//                         Add your first application
//                       </Button>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 applications?.applications.map((app) => {
//                   var dateRender = new Date(app.createdAt);
//                   var dateRenderComp = dateRender.toLocaleDateString();

//                   return (
//                     <JobCard
//                       key={app.id}
//                       position={app.position}
//                       company={app.company}
//                       jd={app.jd}
//                       status={app.status}
//                       date={dateRenderComp}
//                     />
//                   );
//                 })
//               )}
//             </div>
//           </div>
//         ) : null}{" "}
//       </>
//     </>
//   );
// }
