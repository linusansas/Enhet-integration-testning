import { useState } from "react";

interface GuessInputProps {
    onGuess: (guess: number) => void;
}

function GuessInput({ onGuess }: GuessInputProps) {
    const [userGuess, setUserGuess] = useState("");

    return (
        <div>
            <input type="number" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} min="1" max="10" />
            <button
                data-testid="guess-button"
                onClick={() => {
                    const guess = parseInt(userGuess, 10);
                    if (!isNaN(guess)) {
                        onGuess(guess);
                    }
                    setUserGuess("");
                }}
            >
                Gissa
            </button>
        </div>
    );
}

export default GuessInput;
