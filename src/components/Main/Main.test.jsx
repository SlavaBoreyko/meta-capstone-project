import { render, screen, fireEvent } from "@testing-library/react";
import { Main, initialState } from "./Main";

describe("Check out a behavior of Reducer and state", () => {
  test("initializeTimes returns the correct options list.", () => {
    render(<Main />);

    const labelChooseTime = screen.getByLabelText("Choose time");
    expect(labelChooseTime).toHaveValue(initialState.availableTimes[0]);

    fireEvent.click(labelChooseTime);
    initialState.availableTimes.map((time) => {
      const timeOption = screen.getByText(time);
      return expect(timeOption).toBeInTheDocument();
    });

    // const options = screen.getAllByTestId("select-option");
    // expect(optionsValue).toHaveValue(initialState.availableTimes);
  });

  test("choose Date and change Time available options", () => {
    render(<Main />);

    const labelChooseDate = screen.getByLabelText("Choose date");

    const dateNow = new Date("2023-01-02");
    const dateString = dateNow.toISOString().substring(0, 10);
    fireEvent.change(labelChooseDate, { target: { value: dateString } });

    const labelChooseTime = screen.getByLabelText("Choose time");
    fireEvent.click(labelChooseTime);

    const options = screen.getAllByTestId("select-option");
    expect(options.length).toBe(2);
    initialState.availableTimes.slice(1, 3).map((time) => {
      const timeOption = screen.getByText(time);
      return expect(timeOption).toBeInTheDocument();
    });
  });
});
