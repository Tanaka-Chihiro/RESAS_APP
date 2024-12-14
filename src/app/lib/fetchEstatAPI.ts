// import { HttpsProxyAgent } from "https-proxy-agent";
// import axios from "axios";

// const API_KEY = "5c3756dd0628dc5330aef0817cd0d7ca6516f578";
// const BASE_URL = `http://api.e-stat.go.jp/rest/3.0/app/json/getStatsData?appId=${API_KEY}&lang=J&statsDataId=0003448299&metaGetFlg=Y&cntGetFlg=N&explanationGetFlg=Y&annotationGetFlg=Y&sectionHeaderFlg=1&replaceSpChars=0`;

// const fetchEstatAPI = async () => {
//   //都道府県APIの取得
//   const prefectures = await axios
//     .get(BASE_URL)
//     .then((results) => {
//       console.log(results.data);
//       return results.data;
//     })
//     .catch((error) => {
//       console.log("取得に失敗しました");
//       console.log(error.status);
//     });

//   return prefectures;
// };

// export { fetchEstatAPI };
