import { fireEvent, render, screen } from '@testing-library/react';

import Counter from './Counter';


describe('<Counter />', () => {
  test('should init the title with value 0', () => {
    render(<Counter />);

    const spanTag = screen.getByText("0");

    expect(spanTag).toBeInTheDocument();
  });

  test("should have a className 'span neutral'", () => {
    render(<Counter />);

    const spanTag = screen.getByText("0");

    expect(spanTag).toHaveClass("span neutral");
  });

  test("span should not init with className 'span positive' or 'span negative'", () => {
    render(<Counter />);

    const spanTag = screen.getByText("0");

    expect(spanTag).not.toHaveClass("span positive");
    expect(spanTag).not.toHaveClass("span negative");
  });

  test("should have button to increment and button to decrement", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByText("increment");
    const buttonDecrement = screen.getByText("decrement");

    expect(buttonIncrement).toBeInTheDocument();
    expect(buttonIncrement).toHaveClass("increment");

    expect(buttonDecrement).toBeInTheDocument();
    expect(buttonDecrement).toHaveClass("decrement");
  });

  test("should increment +1 on click button 'increment'", () => {
    render(<Counter />);

    const button = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(screen.queryByText("1")).toBeNull();

    fireEvent.click(button);

    expect(screen.queryByText("1")).toBeInTheDocument();
  });

  test("should decrement -1 on click button 'decrement'", () => {
    render(<Counter />);

    const button = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(screen.queryByText("-1")).toBeNull();

    fireEvent.click(button);

    expect(screen.queryByText("-1")).toBeInTheDocument();
  });

  test("should add className 'span positive' when the value is greater than 0", () => {
    render(<Counter />);

    const button = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass("span positive");

    fireEvent.click(button);

    expect(screen.queryByText("1")).toHaveClass("span positive");
  });

  test("should add className 'span negative' when the value is less than 0", () => {
    render(<Counter />);

    const button = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass("span negative");

    fireEvent.click(button);

    expect(screen.queryByText("-1")).toHaveClass("span negative");
  });
});
