import { useState } from "react";
import GuessInput from "./GuessInput";

function HandleGuess() {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [message, setMessage] = useState("");

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    const handleGuess = (guess: number) => {
        if (guess === randomNumber) {
            setMessage("Grattis! Du gissade rätt!");
        } else {
            setMessage(`Fel gissning, rätt svar var ${randomNumber}. Försök igen!`);
        }
        setRandomNumber(generateRandomNumber());
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Gissa numret</h1>
            <p>Gissa ett nummer mellan 1 och 10</p>
            <GuessInput onGuess={handleGuess} />
            {message && <p>{message}</p>}
        </div>
    );
}

export default HandleGuess;
