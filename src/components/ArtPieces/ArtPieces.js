import React from "react"
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview"

export default function ArtPieces({ pieces }) {
  return (
    <ul className="flex flex-col gap-2 items-center py-5">
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          title={piece.name}
          artist={piece.artist}
          image={piece.imageSource}
          slug={piece.slug}
        />
      ))}
    </ul>
  )
}
