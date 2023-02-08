import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const signUp = (email, password, userDisplayName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(function (result) {
        result.user.displayName = userDisplayName;
      })
      .catch(function (error) {
        console.log(error);
      });
    setDoc(doc(db, "users", email), { savedShow: [] });
  };

  const login = () => {
    return signInWithEmailAndPassword(auth);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signWithGoogle = () => {
    return signInWithPopup(auth, provider).then((result) => {
      setDoc(doc(db, "users", result.user.email), { savedShow: [] });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currntUser) => {
      setUser(currntUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, signUp, logOut, signWithGoogle, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth({}) {
  return useContext(AuthContext);
}
