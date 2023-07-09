"use client";

import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Komentarji = ({ prikaziKomentarje, setPrikaziKomentarje }) => {
  const [podatki, setPodatki] = useState([]);

  useEffect(() => {
    pridobiPodatke();
  }, [podatki]);

  const pridobiPodatke = async () => {
    const colRef = collection(db, "restavracija");
    const querySnapshot = await getDocs(colRef);
    const zacasniPodatki = [];

    querySnapshot.forEach((doc) => {
      zacasniPodatki.push(doc.data());
    });

    setPodatki(zacasniPodatki);
  };

  return (
    <div className={`komentarji ${prikaziKomentarje ? "show" : "close"}`}>
      <div>
        <button
          onClick={() => setPrikaziKomentarje(false)}
          className="buttonKomentarjiZapri"
        >
          <div className="komentarjiIcon">
            <span className="barKomentarji"></span>
            <span className="barKomentarji"></span>
          </div>
        </button>
      </div>

    
      <h4>KOMENTARJI</h4>

      <ul>
        {podatki.map((podatek, index) => (
          <li key={index}>
            <span className="spanIme"> {podatek.ime}:</span>
            <span className="spanKomentar">{podatek.komentar}</span> <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Komentarji;
