import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import NumberOfBeings from "./number_of_beings";
import userEvent from "@testing-library/user-event";


test('Renders Number Of Beings', () => {
  render(<NumberOfBeings numberOfBeings='' onChangeNoOfBeing={() => {}} />);
  expect(screen.getByText(/Number Of Beings:/i)).toBeInTheDocument();
});

test('Displays Number Of Beings value as expected', () => {  
  const onChangeHandler = jest.fn();
  render(<NumberOfBeings numberOfBeings='2' onChangeNoOfBeing={onChangeHandler}/>);
  
  const numberOfBeings = screen.getByRole('textbox');    
  expect(numberOfBeings).toHaveValue('2');
});

test('Check if funciton is being called as expected', async () => { 
const onChangeHandler = jest.fn();
render(<NumberOfBeings numberOfBeings='6' onChangeNoOfBeing={onChangeHandler} />);

await userEvent.type(screen.getByRole('textbox'), '6');
expect(onChangeHandler).toHaveBeenCalled();
});

test(`Given the NumberOfBeings less than 1,000,000,000 there should be error messages present`, async () => { 
  const onChangeHandler = jest.fn();
  render(<NumberOfBeings numberOfBeings='' onChangeNoOfBeing={onChangeHandler} />);
  
  await userEvent.type(screen.getByRole('textbox'), '10000');
  expect(
    screen.getByText("Error - Only numbers allowed. Number of beings must be at least 1,000,000,000"
    )
  ).toBeInTheDocument();
  });

  test(`Given the NumberOfBeings entered contains string there should be error messages present`, async () => { 
    const onChangeHandler = jest.fn();
    render(<NumberOfBeings numberOfBeings='' onChangeNoOfBeing={onChangeHandler} />);
    
    await userEvent.type(screen.getByRole('textbox'), 'rr44');
    expect(
      screen.getByText("Error - Only numbers allowed. Number of beings must be at least 1,000,000,000"
      )
    ).toBeInTheDocument();
    });


  // test(`Given the NumberOfBeings is at least 1,000,000,000 there should not be error messages present`, async () => { 
  //   const onChangeHandler = jest.fn();
  //   render(<NumberOfBeings numberOfBeings='' onChangeNoOfBeing={onChangeHandler} />);
  //   await userEvent.type(screen.getByRole('textbox'), '1000000000');	 	
  //   	expect(screen.queryByText("Error - Only numbers allowed. Number of beings must be at least 1,000,000,000")).not.toBeInTheDocument();
  //   });