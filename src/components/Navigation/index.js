import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import logo from "../../assets/logo.svg";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} width="100" alt="logo" />
        </Navbar.Brand>
        <Nav style={{ width: "70%" }} fill></Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }} fill>
            <NavbarItem path="/" linkText="Home" />

            {loginLogoutControls}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
