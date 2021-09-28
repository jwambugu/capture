import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/our-work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Navbar;
