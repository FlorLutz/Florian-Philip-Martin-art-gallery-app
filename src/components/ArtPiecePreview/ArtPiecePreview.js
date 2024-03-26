import React from "react"
import { useRouter } from "next/router"
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton"

export default function ArtPiecePreview({
  title,
  image,
  artist,
  slug,
  trigger,
}) {
  const router = useRouter()
  function handleClick(slug) {
    router.push(`/art-pieces/${slug}`)
  }
  return (
    <li>
      <h1>Title of Masterpiece: {title}</h1>
      <FavoriteButton isFavorite={true} slug={slug} trigger={trigger} />
      <img
        src={image}
        width={500}
        height={500}
        alt={`${artist} - ${title}`}
        onClick={() => handleClick(slug)}
      />
      <p>Artist: {artist}</p>
    </li>
  )
}
