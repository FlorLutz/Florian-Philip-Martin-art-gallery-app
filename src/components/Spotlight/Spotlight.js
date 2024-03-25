import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const Spotlight = ({ pieces }) => {
  const randomList = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomList];

  return (
    <div className="spotlight">
      <h2>Spotlight element</h2>
      <ArtPiecePreview
        key={randomPiece.slug}
        title={randomPiece.name}
        artist={randomPiece.artist}
        image={randomPiece.imageSource}
      />
    </div>
  );
};

export default Spotlight;
