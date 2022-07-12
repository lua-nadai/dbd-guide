import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { NavbarContainer } from "./styles";

const Navbar = () => (
  <NavbarContainer>
    <Link to="/">
      <img src="https://logos-world.net/wp-content/uploads/2021/02/Dead-by-Daylight-Symbol.jpg" alt="DBD-logo" />
    </Link>
    <div>
      <Link to="/survivors">Survivors</Link>
      <Link to="/killers">Killers</Link>
      <Link to="/perks">Perks</Link>
    </div>
  </NavbarContainer>
)

export default Navbar
