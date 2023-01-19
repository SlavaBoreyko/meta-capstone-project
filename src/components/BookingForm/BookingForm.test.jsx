import { render, screen } from "@testing-library/react";
import { Main } from "../Main";

describe("Renders Input Labels and Default Values correct", () => {
  test("Renders the  heading and four labels", () => {
    render(<Main />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();

    const labelChooseDate = screen.getByLabelText("Choose date");
    expect(labelChooseDate).toBeInTheDocument();

    const labelChooseTime = screen.getByLabelText("Choose time");
    expect(labelChooseTime).toBeInTheDocument();

    const labelNumberGuests = screen.getByLabelText("Number of guests");
    expect(labelNumberGuests).toBeInTheDocument();

    const labelOccasion = screen.getByLabelText("Occasion");
    expect(labelOccasion).toBeInTheDocument();
  });

  test("Date Input field has Today Date as a default value", () => {
    render(<Main />);

    const dateNow = new Date(Date.now());
    const dateString = dateNow.toISOString().substring(0, 10);

    const labelChooseDate = screen.getByLabelText("Choose date");

    expect(labelChooseDate).toHaveValue(dateString);
  });

  test("Inputs have correct default values", () => {
    render(<Main />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");
    expect(labelNumberGuests).toHaveValue(2);

    const labelOccasion = screen.getByLabelText("Occasion");
    expect(labelOccasion).toHaveValue("Occasion");
  });

  // test("default disabled button", () => {
  //   expect(screen.getByRole("button")).toBeDisabled();
  // });
});
