import styled from "styled-components";
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function OutNavbar() {
  return (
    <Container>
      <a>
        <h1>A. Workspace</h1>
      </a>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/Solutions">Solutions</Link>
        <Link to="/Pricing">pricing</Link>
      </Menu>
      <RightMenu>
        <Link to="/ContactUs">ContactUs</Link>
        <Link to="/Login">Login</Link>
      </RightMenu>
    </Container>
  );
}

export default OutNavbar;

const Container = styled.nav`
  background-color: white;
  background-size: cover;
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;

  a {
    color: blue;
    font-family: poppins;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 0 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  a {
    color: #000000;
    font-family: poppins;
    text-decoration: none;
    font-size: 14px;
    padding: 0 30px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  a {
    color: #000000;
    font-family: poppins;
    text-decoration: none;
    font-size: 14px;
    padding-right: 30px;
  }
`;
