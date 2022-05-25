import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../Server/firebase/AuthContext";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const Signup = () => {
  const [Name, setName] = useState("");
  const [UniqueID, setUniqueID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Name || !UniqueID || !email || !password) {
      alert("All felids are required");
    }
    setError("");
    try {
      await createUser(Name, UniqueID, email, password);
      navigate("/Account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert(e.message);
    }
  };

  return (
    <>
      <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">
            Please add details for new users
          </h1>
          <p className="py-2">
            <Link to="/" className="underline">
              Goto Home
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="border p-3"
              type="String"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">UniqueID</label>
            <input
              onChange={(e) => setUniqueID(e.target.value)}
              className="border p-3"
              type="String"
            />
          </div>
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
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
