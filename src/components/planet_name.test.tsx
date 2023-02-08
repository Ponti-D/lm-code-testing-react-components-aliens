import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import PlanetName from "./planet_name";

test("renders form element", async () => {
  render(<PlanetName value="" onChangePlanetName={() => {}} />);
  expect(screen.getByText("Planet Name:")).toBeInTheDocument();
});