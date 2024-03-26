import React from "react"
// import useLocalStorage from "@/hooks/useLocalStorage"

const FavoriteButton = ({ isFavorite, slug, onToggleFav }) => {
  console.log("onToggleFav", onToggleFav)
  return (
    <div>
      <button onClick={onToggleFav}>
        {isFavorite ? "I'm favorite" : "I'm not favorite"}
      </button>
    </div>
  )
}

export default FavoriteButton
