"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Prefectures from "./Prefectures";
import Graph from "./Graph";
import Dropdown from "./Dropdown";
import styles from "./components.module.css";
import { PrefecturesState, PopulationState } from "../lib/types";

const Main = () => {
  //都道府県一覧
  const [prefectures, setPrefectures] = useState<PrefecturesState | null>(null);

  //人口情報
  const [prefPopulation, setPrefPopulation] = useState<PopulationState>([]);

  //年代選択のプルダウンメニュー
  const [selectedValue, setSelectedValue] = useState<string>("0");

  //SP版アコーディオンメニュー
  const [isOpen, setIsOpen] = useState(false);

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

  //SP版アコーディオンメニューをクリックしたときの処理
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //チェックボックスの処理
  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    const checkedPrefPopulation = prefPopulation.slice();

    //チェックをつけたときの処理
    if (check) {
      //現在チェックされている都道府県を確認
      if (
        checkedPrefPopulation.findIndex(
          (value) => value.prefName === prefName
        ) !== -1
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
          checkedPrefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[`${selectedValue}`].data,
          });
          setPrefPopulation(checkedPrefPopulation);
        })
        .catch((error) => {
          console.log("取得に失敗しました");
          console.log(error.status);
        });
    } else {
      //チェックを外した時の処理
      const deleteIndex = checkedPrefPopulation.findIndex(
        (value) => value.prefName === prefName
      );
      //現在チェックされている都道府県を確認
      if (deleteIndex === -1) return;

      //チェックを外した都道府県を削除
      checkedPrefPopulation.splice(deleteIndex, 1);
      setPrefPopulation(checkedPrefPopulation);
    }
  };

  return (
    <main className={styles.main}>
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
