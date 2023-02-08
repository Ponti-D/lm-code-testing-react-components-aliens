import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesName from "./species_name";

test("renders label text element", async () => {
  render(<SpeciesName value="" onChangeSpeciesName={() => {}} />);
  expect(screen.getByText("Species Name:")).toBeInTheDocument();
});

test('displays speciesName value as expected', () => {  
    const onChangeHandler = jest.fn();
    render(<SpeciesName value='Humans' onChangeSpeciesName={onChangeHandler}/>);
    const speciesNameElement = screen.getByRole('textbox');    
    expect(speciesNameElement).toHaveValue('Humans');
  });

test("Check if funciton is being called as expected", async () => { 
  const onChangeHandler = jest.fn();
  render(<SpeciesName value="" onChangeSpeciesName={onChangeHandler} />);

  await userEvent.type(screen.getByRole("textbox"), "Humans");
  expect(onChangeHandler).toHaveBeenCalledTimes(6);
});
