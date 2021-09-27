import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
        <Nav>
            <h1>
                <a id="logo" href="#">
                    Capture
                </a>
            </h1>
            <ul>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Our Work</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
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
