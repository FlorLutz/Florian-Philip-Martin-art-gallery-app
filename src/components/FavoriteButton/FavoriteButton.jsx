import React, { useState } from "react"
import useArtworks from "@/hooks/useArtworks"

const FavoriteButton = ({ slug, trigger }) => {
  const { isFavorite, setFavorite } = useArtworks("art-pieces-info")
  const [isFav, setIsFav] = useState(isFavorite(slug) || false)

  const toggleFav = () => {
    const newState = !isFav
    setIsFav(newState)
    setFavorite(slug, newState)
    if (trigger) trigger()
  }

  return (
    <div>
      <button onClick={() => toggleFav()}>
        {isFav ? "I'm favorite" : "I'm not favorite"}
      </button>
    </div>
  )
}

export default FavoriteButton
