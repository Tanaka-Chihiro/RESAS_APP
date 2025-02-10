import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function headers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //都道府県一覧情報の取得
  if (req.method === "GET") {
    const result = await axios
      .get(
        "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/prefectures",
        {
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("取得に失敗しました");
        console.log(error.status);
      });
    return res.status(200).json(result);
  }
}
