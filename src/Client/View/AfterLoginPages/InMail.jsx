import React from "react";
import styled from "styled-components";
import InNavbar from "../../Model/NavBar/InNav";
import comingsoon from "../../../library/coming_soon.png";

function InMail() {
  return (
    <>
      <InNavbar />
      <Container>
        <img src={comingsoon} />
      </Container>
    </>
  );
}

export default InMail;

const Container = styled.div`
  .img {
    /* align-content: center; */
  }
`;
