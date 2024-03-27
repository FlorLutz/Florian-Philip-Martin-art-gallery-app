import { render, screen } from "@testing-library/react"
import ArtPiecePreview from "./ArtPiecePreview.js"
import "@testing-library/jest-dom"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    }
  },
}))
beforeEach(() => {
  render(
    <ArtPiecePreview
      title="Mona Lisa"
      artist="Da Vinci"
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
    />
  )
})

test("renders a heading", () => {
  const heading = screen.getByText(/Title of Masterpiece: "Mona Lisa"/i)
  expect(heading).toBeInTheDocument()
})

test("renders an artist info", () => {
  const artistInfo = screen.getByText(/Artist: Da Vinci/i)
  expect(artistInfo).toBeInTheDocument()
})

test("renders an image", () => {
  const image = screen.getByAltText(/Da Vinci - Mona Lisa/i)
  expect(image).toBeInTheDocument()
})
