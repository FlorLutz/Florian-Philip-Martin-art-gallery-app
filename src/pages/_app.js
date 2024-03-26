import "@/styles/globals.css"
import useSWR from "swr"
import Layout from "@/components/Layout/Layout"
import { useEffect } from "react"
import useArtworks from "@/hooks/useArtworks"

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

  const { initArtworks } = useArtworks("art-pieces-info")

  useEffect(() => {
    // if finished loading, no error and has data
    if (!isLoading && error === undefined && data) {
      const initValue = initFavorites()
      initArtworks(initValue)
    }
  }, [isLoading, error, data])

  function initFavorites() {
    const arr = []

    data.map((art) => {
      arr.push({ id: art.slug, isFavorite: false })
    })
    return arr
  }

  return (
    <>
      <Layout />
      <Component {...pageProps} data={data} />
    </>
  )
}
