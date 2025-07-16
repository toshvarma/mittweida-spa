import {describe} from "vitest";
import {it} from "vitest";
import TitleCard from "./TitleCard.tsx";
import {render, screen} from "@testing-library/react";
import {expect} from "vitest";


describe("title card component", () => {
    it("should render its children", () => {
         render(<TitleCard title={"Title"} description={"My Children"} image={"../public/mittlogo.png"}/>);
         expect(screen.queryByText("My Children")).toBeInTheDocument();
    });
})

