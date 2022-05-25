import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import profile from "../../../library/Userprofile.png";
import { UserAuth } from "../../../Server/firebase/AuthContext";

function InNavbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const { OfflineChange } = UserAuth();
  const handleLogout = async () => {
    try {
      await OfflineChange();
      console.log("ok it  will be done");
      navigate("/");
      await logout();
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Container>
      <logo>
        <h1>A. WorkSpace</h1>
      </logo>
      <Menu>
        <Link to="/InMail">InMail</Link>
        <Link to="/ClassRoom">ClassRoom</Link>
        <Link to="/Meetings">Meetings</Link>
        <Link to="/ChitChat">ChitChat</Link>
        <Link to="/Thoughts">Thoughts</Link>
      </Menu>
      <RightMenu>
        <Link to="/Account">
          <img src={profile} />
        </Link>
        <button1 onClick={handleLogout}>Logout</button1>
      </RightMenu>
    </Container>
  );
}
export default InNavbar;

const Container = styled.nav`
  background-color: #ffffff;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 92px;
  top: 0;
  left: 0;
  right: 0;
  logo {
    color: blue;
    position: absolute;
    size: 40px;
    width: 19.68px;
    height: 24.88px;
    left: 21px;
    top: 24px;
    font-weight: 800;
  }
`;
const RightMenu = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  top: 32px;
  right: 120px;
  img {
    size: 20px;
    :hover {
      height: 28px;
      width: 28px;
    }
  }
  button1 {
    position: absolute;
    top: 0px;
    left: 60px;
    font-weight: 600;
    right: 0px;
    cursor: pointer;
    :hover {
      font-weight: 800;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-around;
  width: 590px;
  height: 33px;
  background-color: #6cb9ff;
  top: 26px;
  left: 440px;
  border-radius: 47px;
  box-shadow: 7px 6px 16px 0px #00000040;
  border-style: hidden;
  :hover {
    background-color: #77baf8;
  }

  a {
    color: black;
    font-size: 13px;
    font-weight: 700;
    align-self: center;
    :hover {
      font-weight: 750;
      font-size: 13.5px;
    }
  }
`;
