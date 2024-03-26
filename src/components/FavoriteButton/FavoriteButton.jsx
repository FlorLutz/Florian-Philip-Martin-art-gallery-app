import React, { useState } from "react"
import useArtworks from "@/hooks/useArtworks"
import Image from "next/image"

const FavoriteButton = ({ slug }) => {
  const { isFavorite, setFavorite } = useArtworks("art-pieces-info")
  const [isFav, setIsFav] = useState(isFavorite(slug) || false)

  const toggleFav = () => {
    setIsFav((prev) => !prev)
    setFavorite(slug, isFav)
  }

  return (
    <div className="absolute top-4 right-4">
      <button onClick={() => toggleFav()}>
        {/* {isFavorite ? "I'm favorite" : "I'm not favorite"} */}
        <Image
          src="/heart.svg"
          width={30}
          height={30}
          alt="heart for favorite"
        />
        <Image
          src="/heart-fav.svg"
          width={30}
          height={30}
          alt="heart for favorite"
        />
      </button>
    </div>
  )
}

export default FavoriteButton
