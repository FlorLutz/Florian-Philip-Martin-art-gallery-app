import React, { useState } from "react"
import useArtworks from "@/hooks/useArtworks"
import Image from "next/image"

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
    <button className="absolute top-4 right-4" onClick={() => toggleFav()}>
      <Image
        src={isFav ? "/heart-fav.svg" : "/heart.svg"}
        width={30}
        height={30}
        alt="heart for favorite"
      />
    </button>
  )
}

export default FavoriteButton
