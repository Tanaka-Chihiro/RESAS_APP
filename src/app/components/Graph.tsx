import styles from "./components.module.css";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { GraphProps } from "../lib/types";

const Graph = ({ label, populationdata }: GraphProps) => {
  const series: Highcharts.SeriesOptionsType[] = [];
  const categories = [];

  for (const p of populationdata) {
    const data = [];

    for (const pd of p.data) {
      data.push(pd.value);
      categories.push(String(pd.year));
    }

    series.push({
      type: "line",
      name: p.prefName,
      data: data,
    });
  }
  //グラフの設定
  const options: Highcharts.Options = {
    title: {
      text: "推移グラフ：" + label,
    },
    //x軸：年度
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
    },
    //y軸：人口
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    //都道府県を選んでいない場合
    series:
      series.length === 0
        ? [{ type: "line", name: "都道府県名", data: [] }]
        : series,
  };

  return (
    <>
      <div className={styles.components}>
        <div className={styles.graph}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </>
  );
};

export default Graph;
