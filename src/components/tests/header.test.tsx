import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Header } from "../ui/header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("should render component", () => {
    render(<Header />);
  });

  it("should show a heading title and subtitle", () => {
    render(<Header />);

    const headingTitle = screen.getByText(/bedev/i);
    const headingSubTitle = screen.getByText(/vagas para devs/i);

    expect(headingTitle).toBeInTheDocument();
    expect(headingSubTitle).toBeInTheDocument();
  });

  it("should render input element", async () => {
    render(<Header />);

    const inputElement = screen.getByPlaceholderText(/pesquisar vaga/i);

    expect(inputElement).toBeInTheDocument();
  });

  it("should show a theme options when button is clicked", async () => {
    render(<Header />);

    const toggleThemeButton = screen.getByTestId("toggle-theme");

    fireEvent.click(toggleThemeButton);

    await waitFor(() => {
      screen.findByText(/system/i && /light/i && /dark/i);
    });
  });
});
