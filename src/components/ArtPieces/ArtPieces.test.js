import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import ArtPieces from "./ArtPieces.js"

const artworks = [
  {
    slug: 12,
    name: "La Guernica",
    artist: "Picasso",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
  {
    slug: 13,
    name: "Der Schrei",
    artist: "Munch",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
]

beforeEach(() => {
  render(<ArtPieces pieces={artworks} />)
})

test("renders a list", () => {
  const list = screen.getByRole("list")
  expect(list).toBeInTheDocument()
})

test("renders a list with as many items as there are objects in the source array", () => {
  const listItems = screen.getAllByRole("listitem")
  expect(listItems.length).toEqual(2)
})
