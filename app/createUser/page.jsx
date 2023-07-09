"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const createUser = function (e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/signIn");
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      router.push("/signIn");
    }
  };

  return (
    <div className="createUserForm">
      <h1>CREATE USER</h1>

      <div>
        <form onSubmit={createUser}>
          <input
            type="text"
            placeholder="Email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnter}
          />

          <button type="submit">CREATE</button>
        </form>
      </div>

      <div className="signInDiv">
        <Link href="/signIn" className="signInLink">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default page;
