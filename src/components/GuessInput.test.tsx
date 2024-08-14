import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import GuessInput from "./GuessInput";

describe("GuessInput", () => {
    it("should render an input and a button", () => {
        render(<GuessInput onGuess={vi.fn()} />);

        expect(screen.getByRole("spinbutton")).toBeVisible();
        expect(screen.getByRole("button")).toHaveTextContent("Gissa");
    });

    it("should submit the entered guess when the button is clicked", () => {
        const handleGuess = vi.fn();
        render(<GuessInput onGuess={handleGuess} />);

        fireEvent.input(screen.getByRole("spinbutton"), { target: { value: "7" } });
        fireEvent.click(screen.getByRole("button"));

        expect(handleGuess).toHaveBeenCalledWith(7);
    });

    it("should clear the input after submitting", async () => {
        const handleGuess = vi.fn();
        render(<GuessInput onGuess={handleGuess} />);

        fireEvent.input(screen.getByRole("spinbutton"), { target: { value: "4" } });
        fireEvent.click(screen.getByRole("button"));

        expect(screen.getByRole("spinbutton")).toHaveValue(null);
    });
});
