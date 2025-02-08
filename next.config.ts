/**@type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            // CORSを許可するオリジン
            key: "Access-Control-Allow-Origin",
            value:
              "https://resas-e4ks9s8vs-tanaka-chihros-projects.vercel.app/",
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
