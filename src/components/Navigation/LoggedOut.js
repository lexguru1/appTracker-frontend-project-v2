import React from "react";
import NavbarItem from "./NavbarItem";
import { Button } from "react-bootstrap";

export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/login" linkText="Login" />
    </>
  );
}
