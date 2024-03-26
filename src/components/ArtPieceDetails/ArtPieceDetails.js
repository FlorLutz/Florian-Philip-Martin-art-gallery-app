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
    <div className="flex flex-col items-center w-full h-full bg-slate-900 pt-24 pb-8 gap-5 text-cyan-200">
      <h1 className="font-bold text-lg">{`Title of Masterpiece: "${title}"`}</h1>
      <div className="relative inline-block">
        <img
          src={image}
          width={500}
          height={500}
          alt={`${artist} - ${title}`}
        />
        <FavoriteButton isFavorite={true} slug={slug} />
      </div>
      <p className="pt-4">Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>

      <Link
        href="./"
        className="font-semibold mt-5 border-4 border-cyan-500 rounded p-2 transition duration-1000 hover:bg-cyan-300"
      >
        <button type="button">Back</button>
      </Link>
    </div>
  )
}
