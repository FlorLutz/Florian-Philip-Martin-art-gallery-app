export default function useArtworks(key) {
  const storageKey = key

  function initArtworks(data) {
    localStorage.setItem(storageKey, JSON.stringify(data))
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

  return { initArtworks, isFavorite, setFavorite }
}
