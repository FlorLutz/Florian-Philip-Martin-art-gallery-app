import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import mockRouter from 'next-router-mock';

beforeEach(() => {

  render(
    <ArtPieceDetails
      title="Mona Lisa"
      artist="Da Vinci"
      year="2050"
      genre="heavy-metal"
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
    />
  );
});

test("renders a heading", () => {
  const heading = screen.getByRole("heading", {
    name: /Title of Masterpiece: Mona Lisa/i,
  });
  expect(heading).toBeInTheDocument();
});

test("renders an artist info", () => {
  const artistInfo = screen.getByText(/Artist: Da Vinci/i);
  expect(artistInfo).toBeInTheDocument();
});

test("renders an image", () => {
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("renders an year", () => {
  const yearInfo = screen.getByText(/Year: 2050/i);
  expect(yearInfo).toBeInTheDocument();
});

test("renders an genre", () => {
  const genreInfo = screen.getByText(/Genre: heavy-metal/i);
  expect(genreInfo).toBeInTheDocument();
});

test("renders an image", () => {
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
