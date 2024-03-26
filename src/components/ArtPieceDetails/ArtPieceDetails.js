import React from "react"
import Link from "next/link"
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton"

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
}) {
  return (
    <div className="w-full h-full bg-cyan-800">
      <h1>Title of Masterpiece: {title}</h1>
      <div className="relative inline-block">
        <img
          src={image}
          width={500}
          height={500}
          alt={`${artist} - ${title}`}
        />
        <FavoriteButton isFavorite={true} slug={slug} />
      </div>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>

      <Link href="./">
        <button type="button">Back</button>
      </Link>
    </div>
  )
}
