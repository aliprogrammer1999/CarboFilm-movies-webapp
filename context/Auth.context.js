import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = () => {
    return signInWithEmailAndPassword(auth);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signWithGoogle = () => {
    return signInWithPopup(auth, provider);
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
