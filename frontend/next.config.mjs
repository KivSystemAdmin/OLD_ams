/** @type {import('next').NextConfig} */
const nextConfig = {
    // 全ての API routes にマッチ
    async headers() {
      return [
        {
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "https://aaasobo-managament-system-frontend.vercel.app",
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,POST",
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type",
            },
          ],
        },
      ];
    },
  };
   
  module.exports = nextConfig;
