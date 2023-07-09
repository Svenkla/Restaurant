"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/utils/firebase";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is authenticated
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const auth = getAuth();

  const odjava = function () {
    signOut(auth)
      .then(() => {
        console.log("ODJAVLEN");
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  return (
    <div className="navbar">
      <h3>
        <Link
          href="/"
          className="navbarLink"
          onClick={() => setShowMenu(false)}
        >
          Food Restaurant
        </Link>
      </h3>

      {user && (
        <div className="prijavlen">
          <h4>{user.email}</h4>
          <button onClick={odjava}>ODJAVA</button>
        </div>
      )}

      <button onClick={toggleMenu} className="navbarButton">
        <div className={`menuIcon ${showMenu ? "active" : ""}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </button>

      <div className={`menuItems ${showMenu ? "Down" : "Up"}`}>
        <h2 className="meni">MENI</h2>
        <Link href="/pice" onClick={toggleMenu}>
          Pice
        </Link>
        <Link href="/spageti" onClick={toggleMenu}>
          Špageti
        </Link>
        <Link href="/juhe" onClick={toggleMenu}>
          Juhe
        </Link>
        <Link href="/nudli" onClick={toggleMenu}>
          Nudli
        </Link>
        <Link href="/govedina" onClick={toggleMenu}>
          Govedina
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
