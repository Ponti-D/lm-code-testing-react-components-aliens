import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import ReasonForSparing from "./reason_for_sparing";
import userEvent from "@testing-library/user-event";


test('renders Reason For Sparing label',  () => {
  render(<ReasonForSparing value='' onChangeReasonForSparing={() => {}} />);
  expect(screen.getByText(/Reason For Sparing:/i)).toBeInTheDocument();
});

test('displays Reason For Sparing has value as expected', () => {  
  const onChangeHandler = jest.fn();
  render(<ReasonForSparing value='ddd' onChangeReasonForSparing={onChangeHandler}/>);
  const reasonForSparing = screen.getByRole('textbox');    
  expect(reasonForSparing).toHaveValue('ddd');
});

test('Check if funciton is being called as expected', async () => { 
const onChangeHandler = jest.fn();
render(<ReasonForSparing value='' onChangeReasonForSparing={onChangeHandler} />);

await userEvent.type(screen.getByRole('textbox'), 'this is my reason');
expect(onChangeHandler).toHaveBeenCalled();
});