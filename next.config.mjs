/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["example-apis.vercel.app"],

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "example-apis.vercel.app",
    //     port: "",
    //     pathname: "*",
    //   },
    // ],
  },
};

export default nextConfig;
