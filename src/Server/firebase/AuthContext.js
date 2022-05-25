import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase/FirebaseInitialize";
import { setDoc, doc, Timestamp, updateDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (Name, UniqueID, email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    onAuthStateChanged(auth, (currentUser) => {
      setDoc(doc(db, "Users", currentUser.uid), {
        uid: currentUser.uid,
        Name: Name,
        UniqueId: UniqueID,
        email: email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
    });
    return;
  };

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const OnlineChange = () => {
    return onAuthStateChanged(auth, (currentUser) => {
      updateDoc(doc(db, "Users", currentUser.uid), {
        isOnline: true,
      });
    });
  };
  const OfflineChange = () => {
    return onAuthStateChanged(auth, (currentUser) => {
      updateDoc(doc(db, "Users", currentUser.uid), {
        isOnline: false,
      });
    }).then(signOut(auth));
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, LogIn, OnlineChange, OfflineChange }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
