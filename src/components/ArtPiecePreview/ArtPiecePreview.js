import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ title, image, artist }) {
  return (
    <li>
      <h1>Title of Masterpiece: {title}</h1>
      <Image
        src={image}
        width={500}
        height={500}
        alt={`${artist} - ${title}`}
      />
      <p>Artist: {artist}</p>
    </li>
  );
}
