import React from "react"
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview"

export default function ArtPieces({ pieces, onToggleFav }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          title={piece.name}
          artist={piece.artist}
          image={piece.imageSource}
          slug={piece.slug}
          onToggleFav={onToggleFav}
        />
      ))}
    </ul>
  )
}
