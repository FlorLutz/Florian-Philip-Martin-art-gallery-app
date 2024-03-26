import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Spotlight = ({ pieces, onToggleFavorite, isFavorite }) => {
  const randomList = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomList];

  return (
    <div className="spotlight">
      <ArtPiecePreview
        key={randomPiece.slug}
        title={randomPiece.name}
        artist={randomPiece.artist}
        image={randomPiece.imageSource}
      />
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default Spotlight;
