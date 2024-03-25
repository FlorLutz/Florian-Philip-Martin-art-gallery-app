import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { useRouter } from "next/router";

export default function ArtPieces({ pieces }) {
  function handleClick(slug) {
    const router = useRouter();
    router.push((href = `/art-pieces/${slug}`));
  }
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          title={piece.name}
          artist={piece.artist}
          image={piece.imageSource}
          handleClick={() => {
            handleClick();
          }}
        />
      ))}
    </ul>
  );
}
