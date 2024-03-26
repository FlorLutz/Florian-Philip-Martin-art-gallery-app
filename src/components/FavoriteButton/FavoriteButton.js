import React from "react";
import Image from "next/image.js";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  const handleClick = () => {
    console.log("Button clicked");
    onToggleFavorite(); // Call the provided function
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="../../assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
