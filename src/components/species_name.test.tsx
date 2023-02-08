import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import SpeciesName from "./species_name";

test("renders form element", async () => {
  render(<SpeciesName value="" onChangeSpeciesName={() => {}} />);
  expect(screen.getByText("Species Name:")).toBeInTheDocument();
});
