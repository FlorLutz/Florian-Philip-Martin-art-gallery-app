import React from "react";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      ArtPieceDetails {image} {title} {artist} {year} {genre}
    </div>
  );
}
