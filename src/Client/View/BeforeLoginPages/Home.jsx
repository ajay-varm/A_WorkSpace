import React from "react";
import styled from "styled-components";
import OutNavbar from "../../Model/NavBar/OutNav";

function Home() {
  return (
    <>
      <OutNavbar />
      <Container>
        <a>hi container hello</a>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  padding: 50px 50px;
  background-color: greenyellow;
`;
