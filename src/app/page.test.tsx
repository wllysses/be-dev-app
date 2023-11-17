import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function renderComponent() {
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

describe("Home Component", () => {
  it("should render component", async () => {
    await waitFor(() => {
      renderComponent();
    });
  });

  it("should show a text and select elements", async () => {
    await waitFor(() => {
      renderComponent();
    });

    const textElement = screen.getByText(/vagas disponíveis/i);
    const selectButtonElement = screen.getByTestId("role-selector");

    expect(textElement).toBeInTheDocument();
    expect(selectButtonElement).toBeInTheDocument();
  });

  it("should show role options when select button is clicked", async () => {
    await waitFor(() => {
      renderComponent();
    });

    const selectButtonElement = screen.getByTestId("role-selector");
    fireEvent.click(selectButtonElement);

    await waitFor(() => {
      screen.findByText(
        /full-stack/i && /front-end/i && /back-end/i && /dados/i
      );
    });
  });
});
