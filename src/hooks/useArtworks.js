import { useState } from "react"

export default function useArtworks(key) {
  const storageKey = key

  function initArtworks(data) {
    const item = localStorage.getItem(storageKey)
    if (item === null) {
      localStorage.setItem(storageKey, JSON.stringify(data))
    }
  }

  function isFavorite(slug) {
    const item = localStorage.getItem(storageKey)
    if (item === null) return false

    const storage = JSON.parse(item)
    if (storage === null) return false

    const artPiece = storage.find((art) => art.id === slug)

    if (artPiece && artPiece.isFavorite) {
      return true
    }

    return false
  }

  function setFavorite(slug, value) {
    const item = localStorage.getItem(storageKey)
    if (item === null) return

    let storage = JSON.parse(item)
    if (!storage) return

    const index = storage.findIndex((art) => art.id === slug)

    if (index !== -1) {
      storage[index].isFavorite = value
    }

    localStorage.setItem(storageKey, JSON.stringify(storage))
  }

  const [favourites, setFavourites] = useState([])
  function getFavorites() {
    const item = localStorage.getItem(storageKey)
    if (item === null) return

    let storage = JSON.parse(item)
    if (!storage) return

    const favoritesFiltered = storage.filter((art) => art.isFavorite === true)

    setFavourites(favoritesFiltered.map((art) => art.id))

    return favoritesFiltered.map((art) => art.id) // return a array of slugs
  }

  return { initArtworks, isFavorite, setFavorite, getFavorites, favourites }
}
