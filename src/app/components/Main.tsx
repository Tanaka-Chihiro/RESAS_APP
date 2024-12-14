"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Prefectures from "./Prefectures";

const Main = () => {
  const [prefectures, setPrefectures] = useState<{
    message: null;
    result: {
      prefCode: number;
      prefName: string;
    }[];
  } | null>(null);

  const [prefPopulation, setPrefPopulation] = useState<
    {
      prefName: string;
      data: { year: number; value: number }[];
    }[]
  >([]);

  useEffect(() => {
    axios
      .get(
        "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/prefectures",
        {
          headers: {
            "X-API-KEY": "8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ",
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((results) => {
        console.log(results);
        setPrefectures(results.data);
      })
      .catch((error) => {
        console.log("取得に失敗しました");
        console.log(error.status);
      });
  }, []);

  console.log(prefectures);

  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {};

  return (
    <main>
      {prefectures && (
        <Prefectures
          prefectures={prefectures.result}
          onChange={handleClickCheck}
        />
      )}
    </main>
  );
};

export default Main;
