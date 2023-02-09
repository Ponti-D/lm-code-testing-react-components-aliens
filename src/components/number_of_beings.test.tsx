import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import NumberOfBeings from "./number_of_beings";
import userEvent from "@testing-library/user-event";


test("renders Number Of Beings label", () => {
  render(<NumberOfBeings value="" onChangeNoOfBeing={() => {}} />);
  expect(screen.getByText("Number Of Beings:")).toBeInTheDocument();
});

test('displays speciesName value as expected', () => {  
  const onChangeHandler = jest.fn();
  render(<NumberOfBeings value='2' onChangeNoOfBeing={onChangeHandler}/>);
  
  const speciesNameElement = screen.getByRole('textbox');    
  expect(speciesNameElement).toHaveValue('2');
});

test("Check if funciton is being called as expected", async () => { 
const onChangeHandler = jest.fn();
render(<NumberOfBeings value="6" onChangeNoOfBeing={onChangeHandler} />);

await userEvent.type(screen.getByRole("textbox"), "6");
expect(onChangeHandler).toHaveBeenCalled();
});
