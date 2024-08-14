import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HandleGuess from "./HandleGuess";

// Mocka GuessInput-komponenten för att isolera testning av HandleGuess
vi.mock("./GuessInput", () => {
    return {
        default: (props: { onGuess: (value: number) => void }) => (
            <div>
                <input type="number" onChange={(e) => props.onGuess(Number(e.target.value))} data-testid="guess-input" />
                <button onClick={() => props.onGuess(5)} data-testid="guess-button">
                    Gissa
                </button>
            </div>
        ),
    };
});
describe("HandleGuess", () => {
    it("should render correctly with title, instructions, and GuessInput component", () => {
        render(<HandleGuess />);

        expect(screen.getByText("Gissa numret")).toBeVisible();
        expect(screen.getByText("Gissa ett nummer mellan 1 och 10")).toBeVisible();
        expect(screen.getByTestId("guess-button")).toBeVisible();
    });

    it("should display a failure message with the correct number when the guess is wrong", async () => {
        const originalMathRandom = Math.random;
        Math.random = () => 0.1; // Mocka så att random number är 2

        render(<HandleGuess />);

        // Simulera en gissning med felaktigt nummer (5)
        fireEvent.change(screen.getByTestId("guess-input"), { target: { value: "5" } });
        fireEvent.click(screen.getByTestId("guess-button"));

        expect(screen.getByText(/Fel gissning, rätt svar var 2/)).toBeVisible();

        Math.random = originalMathRandom;
    });

    it("should display a success message when the guess is correct", async () => {
        const originalMathRandom = Math.random;
        Math.random = () => 0.4; // Mocka så att random number är 5

        render(<HandleGuess />);

        // Simulera en korrekt gissning (5)
        fireEvent.change(screen.getByTestId("guess-input"), { target: { value: "5" } });
        fireEvent.click(screen.getByTestId("guess-button"));

        // Kontrollera om meddelandet visas
        expect(screen.getByText("Grattis! Du gissade rätt!")).toBeVisible();

        Math.random = originalMathRandom;
    });
});
