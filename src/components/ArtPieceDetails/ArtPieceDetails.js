import React from "react"
import Image from "next/image"
import Link from "next/link"
import ColorPalette from "../ColorPalette/ColorPalette"
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton"
import CommentSection from "@/components/CommentSection/CommentSection"

export default function ArtPieceDetails({ image, title, artist, year, genre, slug, colors }) {
  console.log(colors)
  return (
    <div className="flex flex-row justify-center w-full h-full bg-slate-900 pt-24 gap-5 text-cyan-200 mb-6">
      <div>
        <h1 className="font-bold text-lg">{`Title of Masterpiece: "${title}"`}</h1>
        <div className="relative inline-block">
          <img src={image} width={500} height={500} alt={`${artist} - ${title}`} />
          <FavoriteButton isFavorite={true} slug={slug} />
        </div>
        <ColorPalette colors={colors} />
        <p className="pt-4">Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>

        <Link
          href="./"
          className="font-semibold mt-5 border-4 border-cyan-500 rounded p-2 transition duration-1000 hover:bg-cyan-300"
        >
          <button type="button">back</button>
        </Link>
      </div>
      <div className="pt-7">
        <CommentSection slug={slug} />
      </div>
    </div>
  )
}
