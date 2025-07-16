import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LocationCard from "./LocationCard";

// Create mock function outside so we can reference it
const navigateMock = vi.fn();

// Mock wouter with ESM syntax
vi.mock("wouter", () => ({
    useLocation: () => [null, navigateMock],
}));

describe("LocationCard", () => {
    it("renders the title and description", () => {
        render(
            <LocationCard
                id="1"
                title="Historic Tower"
                description="A tall medieval tower"
                imageUrl="/tower.jpg"
            />
        );

        expect(screen.getByText("Historic Tower")).toBeInTheDocument();
        expect(screen.getByText("A tall medieval tower")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /read more/i })).toBeInTheDocument();
    });

    it("navigates to detail page on button click", () => {
        render(
            <LocationCard
                id="42"
                title="Test Title"
                description="Test Description"
                imageUrl="/image.jpg"
            />
        );

        fireEvent.click(screen.getByRole("button", { name: /read more/i }));
        expect(navigateMock).toHaveBeenCalledWith("/place/42");
    });
});
