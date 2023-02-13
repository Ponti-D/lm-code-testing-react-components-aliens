import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WhatIs2Plus2 from "./what_2_plus_2";

test("renders WhatIs2Plus2 label", () => {
  render(<WhatIs2Plus2 value="Not 4" onChangeWhatIs2Plus2={() => {}} />);
  expect(screen.getByText(/^What is 2 \+ 2\?$/i)).toBeInTheDocument();
});

test("displays WhatIs2Plus2 has value as expected", () => {
  const onChangeHandler = jest.fn();
  render(<WhatIs2Plus2 value="4" onChangeWhatIs2Plus2={onChangeHandler} />);
  const whatIs2Plus2 = screen.getByRole("combobox");
  expect(whatIs2Plus2).toHaveValue("4");
});

test("Check if funciton is being called as expected", async () => {
  const onChangeHandler = jest.fn();
  render(<WhatIs2Plus2 value="" onChangeWhatIs2Plus2={onChangeHandler} />);

  await userEvent.selectOptions(screen.getByRole("combobox"), "Not 4");
  expect(onChangeHandler).toHaveBeenCalled();
});

it("if 4 is selected then there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(<WhatIs2Plus2 value="" onChangeWhatIs2Plus2={onChangeHandler} />);
  await userEvent.selectOptions(screen.getByRole("combobox"), '4');
  expect(
    screen.queryByText("Error - not quite correct - try again!")
  ).not.toBeInTheDocument();
});

it("if Not 4 is selected then there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(<WhatIs2Plus2 value="" onChangeWhatIs2Plus2={onChangeHandler} />);
  await userEvent.selectOptions(screen.getByRole("combobox"), 'Not 4');
  expect(
    screen.getByText("Error - not quite correct - try again!")
  ).toBeInTheDocument();
});