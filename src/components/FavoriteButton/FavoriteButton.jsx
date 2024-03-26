import React, { useState } from "react"
import useArtworks from "@/hooks/useArtworks"

const FavoriteButton = ({ slug }) => {
  const { isFavorite, setFavorite } = useArtworks("art-pieces-info")
  const [isFav, setIsFav] = useState(isFavorite(slug) || false)

  const toggleFav = () => {
    setIsFav((prev) => !prev)
    setFavorite(slug, isFav)
  }

  return (
    <div>
      <button onClick={() => toggleFav()}>
        {isFavorite ? "I'm favorite" : "I'm not favorite"}
      </button>
    </div>
  )
}

export default FavoriteButton
