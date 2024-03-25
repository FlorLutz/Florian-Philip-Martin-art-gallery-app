import "@/styles/globals.css";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <>
      <Layout />
      <Component {...pageProps} data={data} />;
    </>
  );
}
