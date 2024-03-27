import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails"

beforeEach(() => {
  render(
    <ArtPieceDetails
      title="Mona Lisa"
      artist="Da Vinci"
      year="2050"
      genre="heavy-metal"
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      colors={["#978e8b", "#2a201e", "#483833", "#d8d5d8", "#53443b"]}
    />
  )
})

test("renders a heading", () => {
  const heading = screen.getByRole("heading", {
    name: /Title of Masterpiece: "Mona Lisa"/i,
  })
  expect(heading).toBeInTheDocument()
})

test("renders an artist info", () => {
  const artistInfo = screen.getByText(/Artist: Da Vinci/i)
  expect(artistInfo).toBeInTheDocument()
})

test("renders an image with the alt of the art piece", () => {
  const image = screen.getByAltText(/Mona Lisa/i)
  expect(image).toBeInTheDocument()
})

test("renders an year", () => {
  const yearInfo = screen.getByText(/Year: 2050/i)
  expect(yearInfo).toBeInTheDocument()
})

test("renders an genre", () => {
  const genreInfo = screen.getByText(/Genre: heavy-metal/i)
  expect(genreInfo).toBeInTheDocument()
})

test("renders a back button", () => {
  const button = screen.getByRole("button", { name: /back/i })
  expect(button).toBeInTheDocument()
})

test("renders an image with the alt of the favorite-button", () => {
  const favoriteButton = screen.getByAltText(/heart for favorite/i)
  expect(favoriteButton).toBeInTheDocument()
})
