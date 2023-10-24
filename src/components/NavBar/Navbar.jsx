import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { NavbarContainer } from "./styles";
import {
  HOME_PATH,
  KILLERS_PATH,
  PERKS_PATH,
  SURVIVORS_PATH,
} from "../../constants";

const Navbar = () => (
  <NavbarContainer>
  <div>
    <Link to={HOME_PATH}>
      <img src="images/dbdlogo.jpg" alt="DBD-logo" />
    </Link>
    <div>
      <Link to={SURVIVORS_PATH}>Survivors</Link>
      <Link to={KILLERS_PATH}>Killers</Link>
      <Link to={PERKS_PATH}>Perks</Link>
    </div>
  </div>
  </NavbarContainer>
)

export default Navbar
