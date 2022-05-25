import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OutNavbar from "../../Model/NavBar/OutNav";
import "../../../index.css";
import { UserAuth } from "../../../Server/firebase/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { LogIn } = UserAuth();
  const { OnlineChange } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All felids are required");
    }
    setError("");
    try {
      await LogIn(email, password);
      navigate("/InMail");
      await OnlineChange();
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert(e.message);
    }
  };

  return (
    <>
      <OutNavbar />
      <div className="max-w-[400px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">Login to your account</h1>
          <p className="py-2">
            Don't have an account yet?{" "}
            <Link to="/ContactUs" className="underline">
              ContactUs.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3"
              type="password"
            />
          </div>
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            login
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
