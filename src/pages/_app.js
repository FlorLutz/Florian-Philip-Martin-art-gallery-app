import "@/styles/globals.css";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  //function handleToggleFavorite(slug) {}

  return (
    <>
      <Layout />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        //onToggle={handleToggleFavorite}
      />
    </>
  );
}
