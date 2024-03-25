import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div className="w-full h-full bg-cyan-800">
      <h1>Title of Masterpiece: {title}</h1>
      <Image
        src={image}
        width={500}
        height={500}
        alt={`${artist} - ${title}`}
      />
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>

      <Link href="./">
        <button type="button">Back</button>
      </Link>
    </div>
  )
}
