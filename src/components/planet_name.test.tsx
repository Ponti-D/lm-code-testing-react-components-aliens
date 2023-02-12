import "@testing-library/jest-dom";
import { screen, render  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanetName from "./planet_name"; 


test("renders Planet Name label", () => {
  render(<PlanetName planetName="" onChangePlanetName={() => {}} />);
  expect(screen.getByText(/Planet Name:/i)).toBeInTheDocument();
});
test("displays planet Name element planetName as expected", () => {
  const onChangeHandler = jest.fn();
  render(<PlanetName planetName="Mars" onChangePlanetName={onChangeHandler} />);
  const planetNameElement = screen.getByRole("textbox");
  expect(planetNameElement).toHaveValue("Mars");
});

test("Check if funciton is being called as expected", async () => {
  const onChangeHandler = jest.fn();
  render(<PlanetName planetName="" onChangePlanetName={onChangeHandler} />);
  await userEvent.type(screen.getByRole("textbox"), "Mars");
  expect(onChangeHandler).toHaveBeenCalledTimes(4);
});

it("Given the planetName entered correctly there should not be error messages present", () => {
  const onChangeHandler = jest.fn();
  render(<PlanetName planetName="mars" onChangePlanetName={onChangeHandler} />);
  expect(screen.queryByText("Error - Planet Name must be between 2 and 49 characters. Numbers are allowed, but no special characters.")).not.toBeInTheDocument();
});

it("Given the PlanetName entered is shorter than 2 charactors there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(<PlanetName planetName="" onChangePlanetName={onChangeHandler} />);
  await userEvent.type(screen.getByRole("textbox"), "h");
  expect(
    screen.getByText(
      "Error - Planet Name must be between 2 and 49 characters. Numbers are allowed, but no special characters."
    )
  ).toBeInTheDocument();
});

it("Given the PlanetName entered longer than 49 charactors there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(<PlanetName planetName="" onChangePlanetName={onChangeHandler} />);
  await userEvent.type(
    screen.getByRole("textbox"),
    `wweeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwe00099090
    9090909090909eeweeeeeeeeeeeeeeee0000000000000000000000000000000000000888888888888`
  );
  expect(
    screen.getByText(
      "Error - Planet Name must be between 2 and 49 characters. Numbers are allowed, but no special characters."
    )
  ).toBeInTheDocument();
});

it("Given the PlanetName entered contains special characters there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(<PlanetName planetName="" onChangePlanetName={onChangeHandler} />);
  await userEvent.type(screen.getByRole("textbox"), "humans@!*");
  expect(
    screen.getByText(
      "Error - Planet Name must be between 2 and 49 characters. Numbers are allowed, but no special characters."
    )
  ).toBeInTheDocument();
});

