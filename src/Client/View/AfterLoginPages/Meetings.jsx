import React from "react";
import styled from "styled-components";
import InNavbar from "../../Model/NavBar/InNav";
import comingsoon from "../../../library/coming_soon.png";

function Meetings() {
  return (
    <>
      <InNavbar />
      <Container>
        <img src={comingsoon} />
      </Container>
    </>
  );
}

export default Meetings;

const Container = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  padding: 50px 50px;
  background-color: greenyellow;
`;
