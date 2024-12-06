// // import { GetServerSideProps } from "next";
// import { getPrefecturesData } from "../lib/getPrefecturesData";

import axios from "axios";

// 型定義
interface Prefecture {
  id: number;
  code: string;
  name: string;
  area_id: number;
  created_at: string;
  updated_at: string;
}
interface PrefecturesData {
  prefectures: Prefecture[];
}

const Prefectures = ({ prefectures }: PrefecturesData) => {
  axios
    .get("https://apis.apima.net/k2srm05wzm1pdl3xk0sv/v1/prefectures/")
    .then((results) => {
      console.log(results.data);
    })
    .catch((error) => {
      console.log("失敗");
      console.log(error.status);
    });
  return (
    <div>
      {/* <ul>
        <li>
          {prefectures.map((prefecture) => (
            <li key={prefecture.id}>{prefecture.name}</li>
          ))}
        </li>
      </ul> */}
    </div>
  );
};

export default Prefectures;
