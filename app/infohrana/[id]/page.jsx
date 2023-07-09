"use client";

import { useEffect, useState } from "react";
import { fetchTabData } from "@/app/service";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Page = () => {
  const [data, setData] = useState({}); // Spremenjeno: začetna vrednost kot prazen objekt {}
  const { id } = useParams();

  useEffect(() => {
    fetchTabData(id).then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);

  const imgSrc = !data ? "" : data.hints ? data.hints[0].food.image : "";

  return (
    <div className="infoOHrani">
      <div className="naslovInfoHrana">
        <h1>INFO HRANA</h1>
      </div>

      <div className="ifnoHranaCard">
        <p className="infoNaslovCard">
          {data?.hints?.[0].food?.label || (
            <Skeleton baseColor="#202020" highlightColor="#444" />
          )}
        </p>
        <img
          src={
            data?.hints?.[0].food?.image || (
              <Skeleton baseColor="#202020" highlightColor="#444" />
            )
          }
          width={200}
          height={200}
          alt="slika"
        />
        <p>
          <span>Ogljikovi hidrat: </span>
          {data?.hints?.[0].food?.nutrients.CHOCDF.toFixed(1) || (
            <Skeleton baseColor="#202020" highlightColor="#444" />
          )}
        </p>
        <p>
          <span>Kcal: </span>
          {data?.hints?.[0].food?.nutrients.ENERC_KCAL || (
            <Skeleton baseColor="#202020" highlightColor="#444" />
          )}
        </p>
        <p>
          <span>Maščobe: </span>
          {data?.hints?.[0].food?.nutrients.FAT.toFixed(1) || (
            <Skeleton baseColor="#202020" highlightColor="#444" />
          )}
        </p>
        <p>
          <span>Prehranske vlaknine: </span>
          {data?.hints?.[0].food?.nutrients.FIBTG.toFixed(1) || (
            <Skeleton baseColor="#202020" highlightColor="#444" />
          )}
        </p>
        <p>
          <span>Odstotek: </span>
          {data?.hints?.[0].food?.nutrients.PROCNT.toFixed(1) || (
            <Skeleton baseColor="#202020" highlightColor="#444" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Page;
