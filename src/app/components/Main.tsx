"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Prefectures from "./Prefectures";
import Graph from "./Graph";
import Dropdown from "./Dropdown";

const Main = () => {
  //都道府県一覧
  const [prefectures, setPrefectures] = useState<{
    message: null;
    result: {
      prefCode: number;
      prefName: string;
    }[];
  } | null>(null);

  //アコーディオンメニュー
  const [isOpen, setIsOpen] = useState(false);

  //人口情報
  const [prefPopulation, setPrefPopulation] = useState<
    {
      prefName: string;
      data: { year: number; value: number }[];
    }[]
  >([]);

  //年代選択のプルダウンメニュー
  const [selectedValue, setSelectedValue] = useState<string>("0");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    //都道府県一覧の取得
    axios
      .get(
        "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/prefectures",
        {
          headers: {
            "X-API-KEY": API_KEY,
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

  //プルダウンの選択肢
  const options = [
    { label: "総人口", value: "0" },
    { label: "年少人口", value: "1" },
    { label: "生産年齢人口", value: "2" },
    { label: "老年人口", value: "3" },
  ];
  //年代を選択したときの処理
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setPrefPopulation([]);
  };

  //チェックボックス
  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    let c_prefPopulation = prefPopulation.slice();

    //チェックをつけたときの処理
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
              "X-API-KEY": API_KEY,
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((results) => {
          c_prefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[`${selectedValue}`].data,
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

  //アコーディオンメニューの処理
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(prefPopulation);

  return (
    <main>
      <Dropdown
        options={options}
        value={selectedValue}
        onChange={handleChange}
      />
      {prefectures && (
        <Prefectures
          prefectures={prefectures.result}
          onChange={handleClickCheck}
          isOpen={isOpen}
          onToggle={handleToggle}
        />
      )}
      {selectedValue === options[0].value ? (
        <Graph label={options[0].label} populationdata={prefPopulation} />
      ) : selectedValue === options[1].value ? (
        <Graph label={options[1].label} populationdata={prefPopulation} />
      ) : selectedValue === options[2].value ? (
        <Graph label={options[2].label} populationdata={prefPopulation} />
      ) : (
        <Graph label={options[3].label} populationdata={prefPopulation} />
      )}
    </main>
  );
};

export default Main;
