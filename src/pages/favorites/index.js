import ArtPieces from "@/components/ArtPieces/ArtPieces";
import React from "react";

// use data and artPiecesInfo as props to filter favorite pieces
const artPiecesInfo = [
  {
    slug: "clay-bust-sculptures",
    isFavorite: false,
  },
  {
    slug: "kiwi-juice-on-glass",
    isFavorite: true,
  },
];

const data = [
  {
    slug: "clay-bust-sculptures",
    artist: "dilara irem",
    name: "Clay Bust Sculptures",
    imageSource:
      "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    year: "2022",
    genre: "Classics",
    colors: ["#27231d", "#af8b69", "#775942", "#8a745b", "#6c6c6c"],
    dimensions: {
      height: 1280,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "kiwi-juice-on-glass",
    artist: "Alexander Mils",
    name: "Kiwi Juice on Glass",
    imageSource:
      "https://example-apis.vercel.app/assets/art/kiwi-juice-on-glass.jpg",
    year: "2015",
    genre: "Veggie Foods",
    colors: ["#a6b33f", "#356e0b", "#eeeee4", "#bec99e", "#635523"],
    dimensions: {
      height: 2899,
      width: 1920,
      type: "jpg",
    },
  },
];

export default function index() {
  const favoriteArtPiecesInfo = artPiecesInfo
    .filter((piece) => piece.isFavorite)
    .map((piece) => piece.slug);
  console.log("favoriteArtPiecesInfo", favoriteArtPiecesInfo);

  const filteredFavoritePieces = [];
  for (let piece of favoriteArtPiecesInfo) {
    const favoriteElement = data.find((element) => element.slug === piece);
    filteredFavoritePieces.push(favoriteElement);
  }
  console.log("filteredFavoritePieces", filteredFavoritePieces);

  return <ArtPieces pieces={filteredFavoritePieces} />;
}
