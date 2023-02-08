import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import ReasonForSparing from "./reason_for_sparing";

test("renders form element", async () => {
  render(<ReasonForSparing value="" onChangeReasonForSparing={() => {}} />);
  expect(screen.getByText("Reason For Sparing:")).toBeInTheDocument();
});