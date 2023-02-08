import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import WhatIs2Plus2 from "./what_2_plus_2";

test("renders WhatIs2Plus2", async () => {
  render(<WhatIs2Plus2 value="Not 4" onChangeWhatIs2Plus2={() => {}} />); 
  expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
});
 