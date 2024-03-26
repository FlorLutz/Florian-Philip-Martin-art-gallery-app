import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Navigation from "./Navigation"

const artworks = [
  {
    slug: 15,
    name: "La Rendición de Breda",
    artist: "Diego Velázquez",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
]

beforeEach(() => {
  render(<Navigation />)
})

test("renders Spotlight link", () => {
  const spotlightLink = screen.getByText("Spotlight")
  expect(spotlightLink).toBeInTheDocument()
})
test("renders Gallery link", () => {
  const galleryLink = screen.getByText("Gallery")
  expect(galleryLink).toBeInTheDocument()
})
