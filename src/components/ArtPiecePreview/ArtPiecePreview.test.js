import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview.js";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

beforeEach(() => {
  jest.mock('next/router', () => require('next-router-mock'));
  mockRouter.push("/");
  render(
    <ArtPiecePreview
      title="Mona Lisa"
      artist="Da Vinci"
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
