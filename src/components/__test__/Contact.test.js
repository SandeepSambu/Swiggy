import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us test cases", () => {
  test("Should load the Contact Us component", () => {
    render(<Contact />);

    //Quering
    const Heading = screen.getByRole("heading");

    //Asserting
    expect(Heading).toBeInTheDocument();
  });

  test("Should load Button in Contact Us component", () => {
    render(<Contact />);

    //Quering
    const Button = screen.getByRole("button");

    //Asserting
    expect(Button).toBeInTheDocument();
  });

  test("Should load Input name in the Contact Us component", () => {
    render(<Contact />);

    //Quering
    const Input = screen.getByPlaceholderText("Name");

    //Asserting
    expect(Input).toBeInTheDocument();
  });

  test("Should load two input boxex on the Contace Us component", () => {
    render(<Contact />);

    //Quering
    const noOfInputs = screen.getAllByRole("textbox");

    //Asserting
    expect(noOfInputs.length).toBe(2);
  });
});
