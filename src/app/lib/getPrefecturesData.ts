"use client";

import { useState } from "react";
interface Prefecture {
  id: number;
  code: string;
  name: string;
  area_id: number;
  created_at: string;
  updated_at: string;
}

const getPrefecturesData = async (): Promise<Prefecture[]> => {
  const [prefectures, setPrefectures] = useState("");
  try {
    const response = await fetch(
      "https://apis.apima.net/k2srm05wzm1pdl3xk0sv/v1/prefectures/"
    );
    const data = await response.json();
    setPrefectures(data.name);
    console.log(data);
    return data.prefectures;
  } catch (error) {
    console.error("取得に失敗しました", error);
    return [];
  }
};

export { getPrefecturesData };
