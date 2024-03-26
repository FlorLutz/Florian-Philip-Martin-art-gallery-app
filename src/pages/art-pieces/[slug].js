import React from "react";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function artPiecesSlug({ data }) {
  if (!data) {
    return
  }

  const router = useRouter();
  const { slug } = router.query
  const artPeace = data.find( art => art.slug === slug)

  return (
    <ArtPieceDetails
      image={artPeace.imageSource}
      title={artPeace.title}
      artist={artPeace.name}
      year={artPeace.year}
      genre={artPeace.genre}
      slug={slug}
    />
  )
}
