import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          title={piece.name}
          artist={piece.artist}
          image={piece.imageSource}
        />
      ))}
    </ul>
  );
}
