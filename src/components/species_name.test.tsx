import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesName from "./species_name";

test("renders label text element", () => {
  render(<SpeciesName speciesName="" onChangeSpeciesName={() => {}} />);
  expect(screen.getByText("Species Name:")).toBeInTheDocument();
});

test("displays speciesName value as expected", () => {
  const onChangeHandler = jest.fn();
  render(<SpeciesName speciesName="Humans" onChangeSpeciesName={onChangeHandler} />
  );

  const speciesNameElement = screen.getByRole("textbox");
  expect(speciesNameElement).toHaveValue("Humans");
});

test("Check if funciton is being called as expected", async () => {
  const onChangeHandler = jest.fn();
  render(<SpeciesName speciesName="" onChangeSpeciesName={onChangeHandler} />);

  await userEvent.type(screen.getByRole("textbox"), "Humans");
  expect(onChangeHandler).toHaveBeenCalledTimes(6);
});

it("Given the speciesName entered correctly there should not be error messages present", () => {
  const onChangeHandler = jest.fn();
  render(
    <SpeciesName speciesName="Humans" onChangeSpeciesName={onChangeHandler} />
  );
  expect(screen.queryByText('error')).not.toBeInTheDocument();
});

it("Given the speciesName entered is shorted than 3 charactors there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(
    <SpeciesName speciesName="" onChangeSpeciesName={onChangeHandler} />
  );
  await userEvent.type(screen.getByRole("textbox"), "h");
  expect(screen.getByText('Error - Species Name must be between 2 and 23 characters. No numbers or special characters allowed')).toBeInTheDocument();
});

it("Given the speciesName entered longer than 23 charactors there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(
    <SpeciesName speciesName="" onChangeSpeciesName={onChangeHandler} />
  );
  await userEvent.type(screen.getByRole("textbox"), "wweeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeweeeeeeeeeeeeeeee");
  expect(screen.getByText('Error - Species Name must be between 2 and 23 characters. No numbers or special characters allowed')).toBeInTheDocument();
});
 
it("Given the speciesName entered is numbers there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(
    <SpeciesName speciesName="" onChangeSpeciesName={onChangeHandler} />
  );
  await userEvent.type(screen.getByRole("textbox"), "8888");
  expect(screen.getByText('Error - Species Name must be between 2 and 23 characters. No numbers or special characters allowed')).toBeInTheDocument();
});

it("Given the speciesName entered contains special characters there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(
    <SpeciesName speciesName="" onChangeSpeciesName={onChangeHandler} />
  );
  await userEvent.type(screen.getByRole("textbox"), "humans@!*");
  expect(screen.getByText('Error - Species Name must be between 2 and 23 characters. No numbers or special characters allowed')).toBeInTheDocument();
});
 