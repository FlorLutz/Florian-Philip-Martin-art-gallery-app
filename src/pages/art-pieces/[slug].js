import React from "react";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function artPiecesSlug({ data }) {
  if (!data) {
    return <p>no such page found</p>;
  }
  return (
    <ArtPieceDetails
      image={data.imageSource}
      title={data.title}
      artist={data.name}
      year={data.year}
      genre={data.genre}
    />
  );
}
