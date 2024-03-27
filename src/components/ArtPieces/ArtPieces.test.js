import { render, screen } from "@testing-library/react"
import ArtPieces from "./ArtPieces.js"
import "@testing-library/jest-dom"

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
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    }
  },
}))
beforeEach(() => {
  render(<ArtPieces pieces={artworks} />)
})

beforeEach(() => {
  render(<ArtPieces pieces={artworks} />)
})

test("renders a list", () => {
  const lists = screen.getAllByRole("list")
  expect(lists.length).toEqual(2)
})

test("renders a list with as many items as there are objects in the source array", () => {
  const listItems = screen.getAllByRole("listitem")
  expect(listItems.length).toEqual(4)
})
