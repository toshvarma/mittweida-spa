// src/components/map/mapWidget.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MapWidget from "./MapWidget";
import {vi} from "vitest";

// Mock leaflet-related CSS classes and map behaviors
vi.mock("react-leaflet", async () => {
    const actual = await vi.importActual("react-leaflet");
    return {
        ...actual,
        MapContainer: ({ children }: any) => <div data-testid="map">{children}</div>,
        TileLayer: () => <div data-testid="tile-layer" />,
        Marker: ({ children }: any) => <div data-testid="marker">{children}</div>,
        Popup: ({ children }: any) => <div data-testid="popup">{children}</div>,
    };
});

// Mock RoutingControl as a blank component
vi.mock("./RoutingControl.tsx", () => ({
    default: () => <div data-testid="routing-control" />,
}));

describe("MapWidget", () => {
    it("renders the map container and markers", () => {
        render(<MapWidget embedded={true} />);

        // Confirm map and tile layer render
        expect(screen.getByTestId("map")).toBeInTheDocument();
        expect(screen.getByTestId("tile-layer")).toBeInTheDocument();

        // Confirm at least one marker and popup exists
        expect(screen.getAllByTestId("marker").length).toBeGreaterThan(0);
        expect(screen.getAllByTestId("popup").length).toBeGreaterThan(0);
    });

    it("does not show RoutingControl when embedded", () => {
        render(<MapWidget embedded={true} />);
        expect(screen.queryByTestId("routing-control")).not.toBeInTheDocument();
    });
});
