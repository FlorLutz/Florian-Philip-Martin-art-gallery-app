import React from "react"
import { useRouter } from "next/router"
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton"

export default function ArtPiecePreview({ title, image, artist, slug }) {
  const router = useRouter()
  function handleClick(slug) {
    router.push(`/art-pieces/${slug}`)
  }
  return (
    <li className="flex flex-col items-center border-cyan-900 border-4 rounded-xl bg-cyan-600 p-5 gap-5 w-[570px]">
      <h1>Title of Masterpiece: {title}</h1>
      <div className="relative inline-block">
        <FavoriteButton isFavorite={true} slug={slug} />
        <img
          src={image}
          width={500}
          height={500}
          alt={`${artist} - ${title}`}
          onClick={() => handleClick(slug)}
        />
      </div>
      <p>Artist: {artist}</p>
    </li>
  )
}
