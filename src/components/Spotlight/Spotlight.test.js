import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Spotlight from "./Spotlight"

const artworks = [
  {
    slug: 14,
    name: "La Rendición de Breda",
    artist: "Diego Velázquez",
    imageSource: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
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
  render(<Spotlight pieces={artworks} />)
})

test("renders an image with the alt of the title", () => {
  const image = screen.getByAltText(/La Rendición de Breda/i)
  expect(image).toBeInTheDocument()
})

test("renders an image with the alt of the favorite-button", () => {
  const favoriteButton = screen.getByAltText(/heart for favorite/i)
  expect(favoriteButton).toBeInTheDocument()
})

test("renders an artist info", () => {
  const artistInfo = screen.getByText(/Artist: Diego Velázquez/i)
  expect(artistInfo).toBeInTheDocument()
})
