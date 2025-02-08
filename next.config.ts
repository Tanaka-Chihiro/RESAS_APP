/**@type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            // CORSを許可するオリジン
            key: "Access-Control-Allow-Origin",
            value: "https://resas-lo2o9h9n5-tanaka-chihros-projects.vercel.app",
          },
          {
            // 許可するメソッド
            key: "Access-Control-Allow-Methods",
            value: "*",
          },
          {
            // 許可するリクエストヘッダ
            key: "Access-Control-Allow-Headers",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
