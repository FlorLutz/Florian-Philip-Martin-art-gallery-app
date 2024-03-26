import "@/styles/globals.css";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";
import useLocalStorage from "@/hooks/useLocalStorage"
import {useEffect} from "react"

const fetcher = (...args) => fetch(...args).then((res) => res.json());


const favs = [
  {"blue-and-red": {isFav: true}},
  {"clay-bust-sculptures": {isFav: true}},
]

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );



  // const setState = useLocalStorage("art-pieces-info", []);


  // useEffect(() => {
  //   // if finished loading, no error and has data
  //   if(!isLoading && error === undefined && data){
  //     const initValue = initFavorites();
  //     setState(initValue)
  //   }
  // }, [isLoading, error, data]);
  //
  //
  // function initFavorites(){
  //   const arr = []
  //
  //   data.map((art) => {
  //     arr.push({id:art.slug, isFavorite: false})
  //   })
  //   return arr
  // }

  return (
    <>
      <Layout />
      <Component
        {...pageProps}
        data={data}

      />
    </>
  );
}
