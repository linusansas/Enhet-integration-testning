import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import GuessForm from "./GuessForm";

describe("GuessForm", () => {
    it("should render the guessed number", () => {
        render(<GuessForm onSubmit={vi.fn()} />);

        expect(screen.getByRole("textbox")).toBeVisible();
        expect(screen.getByRole("button")).toHaveTextContent("Submit");
    });
});
