/**@type {import('next').NextConfig} */
const nextConfig = {
  // 全ての API routes にマッチ
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            // CORSを許可するオリジン
            key: "Access-Control-Allow-Origin",

            value: "https://resas-lo2o9h9n5-tanaka-chihros-projects.vercel.app",
          },
          {
            // 許可するメソッド
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,POST",
          },
          {
            // 許可するリクエストヘッダ
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
