import ArtPieces from "@/components/ArtPieces/ArtPieces";
import React from "react";

export default function index({ data }) {
  if (!data) {
    return;
  }
  return <ArtPieces pieces={data} />;
}
