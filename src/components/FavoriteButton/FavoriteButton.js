import Image from "next/image";
import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
