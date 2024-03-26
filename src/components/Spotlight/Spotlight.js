import React from "react"
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview"
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton"

const Spotlight = ({ pieces }) => {
  const randomList = Math.floor(Math.random() * pieces.length)
  const randomPiece = pieces[randomList]

  return (
    <div className="spotlight">
      <ArtPiecePreview
        slug={randomPiece.slug}
        key={randomPiece.slug}
        title={randomPiece.name}
        artist={randomPiece.artist}
        image={randomPiece.imageSource}
      />
    </div>
  )
}

export default Spotlight
