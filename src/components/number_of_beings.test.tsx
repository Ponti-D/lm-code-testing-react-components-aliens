import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import NumberOfBeings from "./number_of_beings";

test("renders form element", () => {
  render(<NumberOfBeings value="" onChangeNoOfBeing={() => {}} />);
  expect(screen.getByText("Number Of Beings:")).toBeInTheDocument();
});

