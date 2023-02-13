import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import ReasonForSparing from "./reason_for_sparing";
import userEvent from "@testing-library/user-event";

test("renders Reason For Sparing label", () => {
  render(
    <ReasonForSparing reasonForSparing="" onChangeReasonForSparing={() => {}} />
  );
  expect(screen.getByText(/Reason For Sparing:/i)).toBeInTheDocument();
});

test("displays Reason For Sparing has value as expected", () => {
  const onChangeHandler = jest.fn();
  render(
    <ReasonForSparing
      reasonForSparing="ddd"
      onChangeReasonForSparing={onChangeHandler}
    />
  );
  const reasonForSparing = screen.getByRole("textbox");
  expect(reasonForSparing).toHaveValue("ddd");
});

test("Check if funciton is being called as expected", async () => {
  const onChangeHandler = jest.fn();
  render(
    <ReasonForSparing
      reasonForSparing=""
      onChangeReasonForSparing={onChangeHandler}
    />
  );

  await userEvent.type(screen.getByRole("textbox"), "this is my reason");
  expect(onChangeHandler).toHaveBeenCalled();
});

it("Given the ReasonForSparing entered is shorter than 2 charactors there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(
    <ReasonForSparing
      reasonForSparing=""
      onChangeReasonForSparing={onChangeHandler}
    />
  );

  await userEvent.type(screen.getByRole("textbox"), "h");
  expect(
    screen.getByText("Error - Reason must be between 17 and 153 characters")
  ).toBeInTheDocument();
});

it("Given the ReasonForSparing entered is longer than 153 charactors there should be error messages present", async () => {
  const onChangeHandler = jest.fn();
  render(
    <ReasonForSparing
      reasonForSparing=""
      onChangeReasonForSparing={onChangeHandler}
    />
  );
  await userEvent.type(
    screen.getByRole("textbox"),
    "hpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp"
  );
  expect(
    screen.getByText("Error - Reason must be between 17 and 153 characters")
  ).toBeInTheDocument();
});

it("Given the ReasonForSparing correctly entered there should be no error messages present", () => {
  const onChangeHandler = jest.fn();
  render(
    <ReasonForSparing
      reasonForSparing=""
      onChangeReasonForSparing={onChangeHandler}
    />
  );

  userEvent.type(
    screen.getByRole("textbox"),
    "jdksjjsappppppppppppppppppppppp"
  );
  expect(
    screen.queryByText("Error - Reason must be between 17 and 153 characters")
  ).not.toBeInTheDocument();
});
