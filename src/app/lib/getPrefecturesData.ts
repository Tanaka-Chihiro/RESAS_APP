import axios from "axios";
import { Prefecture } from "./types";

const getPrefecturesData = async (): Promise<Prefecture[]> => {
  //都道府県APIの取得
  const data = await axios
    .get("https://apis.apima.net/k2srm05wzm1pdl3xk0sv/v1/prefectures/")
    .then((results) => {
      return results.data;
    })
    .catch((error) => {
      console.log("取得に失敗しました");
      console.log(error.status);
    });

  return data;
};

export { getPrefecturesData };
