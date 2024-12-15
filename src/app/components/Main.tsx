"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Prefectures from "./Prefectures";
import Graph from "./Graph";

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
    //都道府県一覧の取得
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

  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    let c_prefPopulation = prefPopulation.slice();

    //チェックをつけたとき
    if (check) {
      if (
        c_prefPopulation.findIndex((value) => value.prefName === prefName) !==
        -1
      )
        return;

      //チェックを付けた都道府県の人口情報を取得
      axios
        .get(
          "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/population/composition/perYear?prefCode=" +
            String(prefCode),
          {
            headers: {
              "X-API-KEY": "8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ",
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((results) => {
          c_prefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[0],
          });
          setPrefPopulation(c_prefPopulation);
        })
        .catch((error) => {
          console.log("取得に失敗しました");
          console.log(error.status);
        });
    } else {
      //チェックを外した時の処理
      const deleteIndex = c_prefPopulation.findIndex(
        (value) => value.prefName === prefName
      );
      if (deleteIndex === -1) return;
      c_prefPopulation.splice(deleteIndex, 1);
      setPrefPopulation(c_prefPopulation);
    }
  };

  console.log(prefPopulation);

  return (
    <main>
      {prefectures && (
        <Prefectures
          prefectures={prefectures.result}
          onChange={handleClickCheck}
        />
      )}
      <Graph populationdata={prefPopulation} />
    </main>
  );
};

export default Main;
