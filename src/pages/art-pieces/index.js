import ArtPieces from "@/components/ArtPieces/ArtPieces"
import React from "react"

export default function index({ data, onToggleFav }) {
  if (!data) {
    return
  }

  if (!data) {
    return
  }
  return <ArtPieces pieces={data} onToggleFav={onToggleFav} />
}
