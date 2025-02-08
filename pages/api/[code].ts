import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function getPopulationData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //URL末尾の都道府県コード
  const code = req.query.code;

  //都道府県別人口情報の取得
  if (req.method === "GET") {
    const result = await axios
      .get(
        `https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/population/composition/perYear?prefCode=${code}`,
        {
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        return response.data.result.data;
      })
      .catch((error) => {
        console.log("取得に失敗しました");
        console.log(error.status);
      });
    return res.status(200).json(result);
  }
}
