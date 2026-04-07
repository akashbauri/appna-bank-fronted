"use client";

import Link from "next/link";
import { useState } from "react";
import { auth, provider } from "../lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);

  const login = async () => {
    const res = await signInWithPopup(auth, provider);
    setUser(res.user);
  };

  return (
    <nav style={nav}>
      <h3>APPNA BANK</h3>

      <div>
        <Link href="/" style={link}>Home</Link>
        <Link href="/dashboard" style={link}>Dashboard</Link>
        <Link href="/loan" style={link}>Loan</Link>
        <Link href="/ai-chat" style={link}>AI Chat</Link>
        <Link href="/learn" style={link}>Learn</Link>
      </div>

      {user ? (
        <button onClick={() => signOut(auth)}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  background: "#111",
  color: "white"
};

const link = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none"
};
