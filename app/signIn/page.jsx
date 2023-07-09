"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signIn = function (e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = user.email;
        console.log(userEmail);
        //DRUGA LOKACIJA
        router.push(`/`);
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
      <h1>SIGN IN</h1>

      <div>
        <form onSubmit={signIn}>
          <input
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnter}
          />

          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default page;
