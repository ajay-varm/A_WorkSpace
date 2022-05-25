import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./Client/View/BeforeLoginPages/ContactUs";
import Home from "./Client/View/BeforeLoginPages/Home";
import Pricing from "./Client/View/BeforeLoginPages/Pricing";
import Solutions from "./Client/View/BeforeLoginPages/Solutions";
import LogIn from "./Client/View/BeforeLoginPages/LogIn";
import { AuthContextProvider } from "./Server/firebase/AuthContext";
import Account from "./Client/View/AfterLoginPages/Account";
import ProtectedRoute from "./Client/Model/ProtectedRoute/ProtectedRoute";
import Signup from "./Admin/AuthManagement/Signup";
import Meetings from "./Client/View/AfterLoginPages/Meetings";
import ChitChat from "./Client/View/AfterLoginPages/ChitChat";
import Thoughts from "./Client/View/AfterLoginPages/Thoughts";
import ClassRoom from "./Client/View/AfterLoginPages/ClassRoom";
import InMail from "./Client/View/AfterLoginPages/InMail";

function App() {
  return (
    <div>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Solutions" element={<Solutions />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Admin" element={<Signup />} />
            <Route
              path="/InMail"
              element={
                <ProtectedRoute>
                  <InMail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ClassRoom"
              element={
                <ProtectedRoute>
                  <ClassRoom />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Meetings"
              element={
                <ProtectedRoute>
                  <Meetings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ChitChat"
              element={
                <ProtectedRoute>
                  <ChitChat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Thoughts"
              element={
                <ProtectedRoute>
                  <Thoughts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
