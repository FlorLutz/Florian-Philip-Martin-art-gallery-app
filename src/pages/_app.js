import "@/styles/globals.css"
import useSWR from "swr"
import Layout from "@/components/Layout/Layout"
import useLocalStorageState from "use-local-storage-state"
import useLocalStorage from "@/hooks/useLocalStorage"
import { useEffect } from "react"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const favs = [
  { "blue-and-red": { isFav: true } },
  { "clay-bust-sculptures": { isFav: true } },
]

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  )

  const [artPieceInfo, setArtPieceInfo] = useLocalStorageState("artPieces", {
    defaultValue: [],
  })

  function handleToggleFav(slug) {
    console.log("toggling")
    const index = state.findIndex((item) => item.slug === slug)
    if (index !== -1) {
      setArtPieceInfo([...artPieceInfo, { slug: slug, isFavorite: true }])
    }
    if (index >= 0) {
      artPieceInfo[index].isFavorite
    }
  }
  //
  //
  // // If the item is found
  //   const newState = [...state];
  //
  //   console.log("newState", newState)
  //
  //   newState[index].isFavorite = !newState[index].isFavorite;
  //
  //   setState(newState);
  // }
  // }

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
      <Component {...pageProps} data={data} onToggleFav={handleToggleFav} />
    </>
  )
}
