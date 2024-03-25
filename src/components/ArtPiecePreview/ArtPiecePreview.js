import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";



export default function ArtPiecePreview({ title, image, artist, slug }) {
  const router = useRouter();


  function handleClick(slug) {
    router.push(`/art-pieces/${slug}`);
  }
  return (
    <li>
      <h1>Title of Masterpiece: {title}</h1>
      <Image
        src={image}
        width={500}
        height={500}
        alt={`${artist} - ${title}`}
        onClick={()=> handleClick(slug)}
      />
      <p>Artist: {artist}</p>
    </li>
  )
}
