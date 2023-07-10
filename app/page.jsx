"use client";

import Image from "next/image";
import prva from "../photos/prva.jpg";
import Search from "@/components/Search";
import { useState, useEffect } from "react";
import HranaNaPage from "@/components/HranaNaPage";
import { fetchData } from "@/app/service";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Komentarji from "@/components/Komentarji";
import Link from "next/link";
import { getAuth } from "firebase/auth";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");
  const [ime, setIme] = useState("");
  const [komentar, setKomentar] = useState("");
  const [prikaziKomentarje, setPrikaziKomentarje] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    fetchData(query).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  const searchFood = (searchValue) => {
    setIsLoading(true);
    fetchData(searchValue).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  };

  const dodajVBazo = async function () {
    const docRef = await addDoc(collection(db, "restavracija"), {
      ime: user.email,
      komentar: komentar,
    });

    window.alert("Uspešno oddan komentar!  Hvala.");

    setIme("");
    setKomentar("");
  };

  return (
    <main className="main">
      <section className="section1">
        <div>
          <Image
            src={prva}
            alt="Picture of the author"
            className="slikaNaPrviStrani"
          />
        </div>

        <div className="iskanjeHrane">
          <p>Si Lačen?</p>
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchFood={searchFood}
          />
        </div>
      </section>

      <section className="section2">
        <div className="naslov-section2">
          <h2>KAR TI SRCE POŽELI</h2>
        </div>

        <div>
          <HranaNaPage data={data} isLoading={isLoading} />
        </div>
      </section>

      <section className="section3">
        <h3>KONTAKTI</h3>

        <div className="kontaktiBorder">
          <div className="kontaktiCard">
            <h5>TELEFON</h5>
            <p>Maribor: 999/999-999</p>
            <p>Ljubljana: 999/999-999</p>
            <p>Kranj: 999/999-999</p>
          </div>

          <div className="kontaktiCard">
            <h5>EMAIL</h5>
            <p>prvi.email@gmail.com</p>
            <p>drugi.email@gmail.com</p>
            <p>treji.email@gmail.com</p>
          </div>

          <div className="kontaktiCard">
            <h5>CHAT</h5>

            {user ? (
              <form method="post">
                <textarea
                  placeholder="Vsebina..."
                  rows="4"
                  cols="20"
                  value={komentar}
                  onChange={(e) => setKomentar(e.target.value)}
                />
                <br />

                <button className="posljiButton" onClick={() => dodajVBazo()}>
                  POŠLJI
                </button>
              </form>
            ) : (
              <div className="createUser">
                <Link href="/createUser" className="createUserLink">
                  PRIJAVA
                </Link>
              </div>
            )}

            <button
              className={`buttonKomentarji ${user ? "" : "prijavaKomentar"}`}
              onClick={() => setPrikaziKomentarje(true)}
            >
              Komentarji
            </button>
          </div>
        </div>

        <Komentarji
          prikaziKomentarje={prikaziKomentarje}
          setPrikaziKomentarje={setPrikaziKomentarje}
        />
      </section>
    </main>
  );
}
