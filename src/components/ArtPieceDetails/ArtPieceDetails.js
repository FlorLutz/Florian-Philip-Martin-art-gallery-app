import React from "react"
import Image from "next/image"
import Link from "next/link"
import ColorPalette from "../ColorPalette/ColorPalette"
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton"
import CommentSection from "@/components/CommentSection/CommentSection"

export default function ArtPieceDetails({ image, title, artist, year, genre, slug, colors }) {
  console.log(colors)
  return (
    <>
      <h1 className="font-bold text-2xl pt-24 text-center text-cyan-200 mb-8">{`Title of Masterpiece: "${title}"`}</h1>
      <div className="flex flex-row flex-wrap justify-center bg-slate-900 gap-6 text-cyan-200 pb-8">
        <div className="flex flex-col items-center gap-2">
          <div className="relative inline-block">
            <img src={image} width={500} height={500} alt={`${artist} - ${title}`} />
            <FavoriteButton isFavorite={true} slug={slug} />
          </div>
          <ColorPalette colors={colors} />
          <p className="pt-4">Artist: {artist}</p>
          <p>Year: {year}</p>
          <p className="mb-6">Genre: {genre}</p>
          <Link
            href="./"
            className="font-semibold border-4 border-cyan-500 rounded p-2 transition duration-1000 hover:bg-cyan-300"
          >
            <button type="button">back</button>
          </Link>
        </div>
        <div className="mb-12">
          <CommentSection slug={slug} />
        </div>
      </div>
    </>
  )
}
