import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", () => {
    render(<App />);

    expect(screen.getByText(/go home/i));
    expect(screen.getByText(/sign up/i, { selector: 'div' }));
    expect(screen.getByPlaceholderText("login"));
    expect(screen.getByPlaceholderText("password"));
    expect(screen.getByPlaceholderText("date"));
    expect(screen.getByPlaceholderText("email"));
    expect(screen.getByText(/sign up/i, { selector: 'input' }));
    expect(screen.getByText(/copyright/i));
});