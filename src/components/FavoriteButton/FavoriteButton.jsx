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
    <div className="absolute top-4 right-4">
      <button onClick={() => toggleFav()}>
        <Image
          src={isFav ? "/heart_fav.svg" : "/heart.svg"}
          width={30}
          height={30}
          alt="heart for favorite"
        />
        </button>
    </div>
  )
}

export default FavoriteButton
