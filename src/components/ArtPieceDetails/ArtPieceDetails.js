import React from "react"
import Image from "next/image"
import Link from "next/link"
import ColorPalette from "../ColorPalette/ColorPalette"
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton"

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  colors,
}) {
  return (
    <div className="w-full h-full bg-cyan-800">
      <h1>Title of Masterpiece: {title}</h1>
      <FavoriteButton isFavorite={true} slug={slug} />
      <Image
        src={image}
        width={500}
        height={500}
        alt={`${artist} - ${title}`}
      />

      <ColorPalette colors={colors} />
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>

      <Link href="./">
        <button type="button">Back</button>
      </Link>
    </div>
  )
}
