import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LocationBox from "./LocationBox";
import {vi} from "vitest";

// Mock MapView to avoid rendering full Leaflet map
vi.mock("../../views/map-view/MapView.tsx", () => ({
    default: () => <div data-testid="mock-mapview">MockMap</div>,
}));

describe("LocationBox", () => {
    it("renders link with embedded map and overlay text", () => {
        render(<LocationBox />);

        // Check for the embedded map (mocked)
        expect(screen.getByTestId("mock-mapview")).toBeInTheDocument();

        // Check for overlay text
        expect(screen.getByText("View Full Map")).toBeInTheDocument();

        // Check for link
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/map");
    });
});
