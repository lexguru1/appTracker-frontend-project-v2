import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";
import { Navigate } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <NavbarItem path="/dashboard" linkText="Dashboard" />
      <Nav.Item style={{ padding: ".5rem 1rem", color: "#0d5c63" }}>
        {user.email}
      </Nav.Item>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
        style={{ backgroundColor: "#0d5c63", border: "0px" }}
      >
        Logout
      </Button>
    </>
  );
}
