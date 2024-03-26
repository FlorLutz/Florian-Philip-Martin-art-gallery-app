import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Spotlight from "./Spotlight"

const artworks = [
  {
    slug: 14,
    name: "La Rendición de Breda",
    artist: "Diego Velázquez",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
]

beforeEach(() => {
  render(<Spotlight pieces={artworks} />)
})

test("renders an image", () => {
  const image = screen.getByRole("img")
  expect(image).toBeInTheDocument()
})
test("renders an artist info", () => {
  const artistInfo = screen.getByText(/Artist: Diego Velázquez/i)
  expect(artistInfo).toBeInTheDocument()
})
