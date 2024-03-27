import ArtPieces from "@/components/ArtPieces/ArtPieces"
import useArtworks from "@/hooks/useArtworks"
import { useEffect, useState } from "react"

export default function index({ data }) {
  if (!data) return

  const { getFavorites } = useArtworks("art-pieces-info")

  const [favorites, setFavorites] = useState()
  const [filteredFavorite, setFilteredFavorite] = useState([])

  useEffect(() => {
    if (window) {
      const favs = getFavorites()
      setFavorites(favs)
    }
  }, [])

  useEffect(() => {
    if (favorites) mapFavorites()
  }, [favorites])

  const mapFavorites = () => {
    let result = []
    for (let fav of favorites) {
      const favoriteElements = data.filter((element) => element.slug === fav)
      result = [...result, ...favoriteElements]
    }
    setFilteredFavorite(result)
  }

  const triggerReRender = () => {
    setFavorites(getFavorites())
  }

  return <ArtPieces pieces={filteredFavorite} trigger={triggerReRender} />
}
