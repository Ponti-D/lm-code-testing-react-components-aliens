import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanetName from "./planet_name";

test("renders Planet Name label element",  () => {
  render(<PlanetName value="" onChangePlanetName={() => {}} />);
  expect(screen.getByText("Planet Name:")).toBeInTheDocument();
});
test('displays planet Name element value as expected', () => {  
    const onChangeHandler = jest.fn();
    render(<PlanetName value='Mars' onChangePlanetName={onChangeHandler}/>);
    const planetNameElement = screen.getByRole('textbox');    
    expect(planetNameElement).toHaveValue('Mars');
  });

test("Check if funciton is being called as expected", async () => { 
  const onChangeHandler = jest.fn();
  render(<PlanetName value="" onChangePlanetName={onChangeHandler} />);

  await userEvent.type(screen.getByRole("textbox"), "Mars");
  expect(onChangeHandler).toHaveBeenCalledTimes(4);
});
