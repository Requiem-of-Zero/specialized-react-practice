import React from "react";
import { NavBarWrapper } from "./NavBar.styles";

const NavBar = ({label}) => {
  return <NavBarWrapper>{label}</NavBarWrapper>;
};

export default NavBar