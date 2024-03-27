export default function useArtworks(key) {
  const storageKey = key

  function initArtworks(data) {
    const item = localStorage.getItem(storageKey)
    if (item === null) {
      localStorage.setItem(storageKey, JSON.stringify(data))
    }
  }

  function getStorage() {
    const item = localStorage.getItem(storageKey)
    if (item === null) return null

    const storage = JSON.parse(item)
    if (storage === null) return null

    return storage
  }

  function isFavorite(slug) {
    const storage = getStorage()
    if (storage === null) return false

    const artPiece = storage.find((art) => art.id === slug)

    if (artPiece && artPiece.isFavorite) {
      return true
    }

    return false
  }

  function setFavorite(slug, value) {
    const storage = getStorage()
    if (storage === null) return

    const index = storage.findIndex((art) => art.id === slug)

    if (index !== -1) {
      storage[index].isFavorite = value
    }

    localStorage.setItem(storageKey, JSON.stringify(storage))
  }

  function getFavorites() {
    const storage = getStorage()
    if (storage === null) return

    const favoritesFiltered = storage.filter((art) => art.isFavorite === true)

    return favoritesFiltered.map((art) => art.id) // return a array of slugs
  }

  function getComments(slug) {
    const storage = getStorage()
    if (storage === null) return []

    const artwork = storage.find((artwork) => artwork.id === slug)

    return artwork ? artwork.comments : []
  }

  function addComment(slug, comment) {
    comment = comment.trim()
    if (comment.length === 0) return

    let artworks = JSON.parse(localStorage.getItem(storageKey)) || []

    artworks = artworks.map((artwork) => {
      if (artwork.id === slug) {
        // deconstructing artwork into a new object,
        // behind the comma override the current comment
        return { ...artwork, comments: [...artwork.comments, comment] }
      }
      return artwork
    })

    localStorage.setItem(storageKey, JSON.stringify(artworks))
  }

  function removeComment(slug, index) {
    const item = localStorage.getItem(storageKey)
    if (item === null) return null

    const storage = JSON.parse(item)
    if (storage === null) return null

    const updatedStorage = storage.map((artwork) => {
      if (artwork.id === slug) {
        return {
          ...artwork,
          comments: artwork.comments.filter((_, i) => i !== index),
        }
      }
      return artwork
    })

    localStorage.setItem(storageKey, JSON.stringify(updatedStorage))
  }

  return {
    initArtworks,
    // favorite
    isFavorite,
    setFavorite,
    getFavorites,
    // comments
    getComments,
    addComment,
    removeComment,
  }
}
