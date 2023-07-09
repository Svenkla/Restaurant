"use client";

import React, { useEffect, useState } from "react";
import { fetchJuheData } from "../service";
import HranaCard from "@/components/HranaCard";
import Link from "next/link";
import CardSkeleton from "@/components/CardSkeleton";

const Page = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJuheData().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="prikazHrane">
      {isLoading && <CardSkeleton cards={10} />}
      {data &&
        data.hints.map((item, i) => (
          <Link href={`/infohrana/${item.food.foodId}`} className="LinkDoHrane">
            <HranaCard item={item} />
          </Link>
        ))}
    </div>
  );
};

export default Page;
