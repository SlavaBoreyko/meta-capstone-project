import { render, screen } from "@testing-library/react";
import { Main } from "../Main";
import { BrowserRouter as Router } from "react-router-dom";

const MockForm = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

describe("Renders Input Labels and Default Values correct", () => {
  test("Renders the  heading and four labels", () => {
    render(<MockForm />);

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
    render(<MockForm />);

    const dateNow = new Date(Date.now());
    const dateString = dateNow.toISOString().substring(0, 10);

    const labelChooseDate = screen.getByLabelText("Choose date");

    expect(labelChooseDate).toHaveValue(dateString);
  });

  test("Inputs 'Number of guests' and 'Occasion' have correct default values", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");
    expect(labelNumberGuests).toHaveValue(2);

    const labelOccasion = screen.getByLabelText("Occasion");
    expect(labelOccasion).toHaveValue("Occasion");
  });

  // test("default disabled button", () => {
  //   expect(screen.getByRole("button")).toBeDisabled();
  // });
});

describe("Validate that the correct attributes are applied", () => {
  test("Date Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelChooseDate = screen.getByLabelText("Choose date");

    const dateNow = new Date(Date.now());
    const dateNowString = dateNow.toISOString().substring(0, 10);

    expect(labelChooseDate.getAttribute("min")).toEqual(dateNowString);
    expect(labelChooseDate.getAttribute("max")).toEqual("2023-12-30");

    expect(labelChooseDate.getAttribute("required")).toEqual("");
  });

  test("Time Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelChooseTime = screen.getByLabelText("Choose time");
    expect(labelChooseTime.getAttribute("required")).toEqual("");
  });

  test("Guests Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");

    expect(labelNumberGuests.getAttribute("required")).toEqual("");
    expect(labelNumberGuests.getAttribute("min")).toEqual("1");
    expect(labelNumberGuests.getAttribute("max")).toEqual("50");
  });

  test("Occasion Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelOccasion = screen.getByLabelText("Occasion");

    expect(labelOccasion.getAttribute("required")).toEqual("");
  });
});
