import { useState } from "react";

interface GuessInputProps {
    onGuess: (guess: number) => void;
}

function GuessInput({ onGuess }: GuessInputProps) {
    const [userGuess, setUserGuess] = useState("");

    const handleSubmit = () => {
        onGuess(parseInt(userGuess, 10));
        setUserGuess("");
    };

    return (
        <div>
            <input type="number" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} min="1" max="10" />
            <button onClick={handleSubmit}>Gissa</button>
        </div>
    );
}

export default GuessInput;
