import { useEffect, useState } from "react";
import GuessInput from "./GuessInput";

function HandleGuess() {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [message, setMessage] = useState("");
    const [correctGuesses, setCorrectGuesses] = useState<number>(0);
    const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);

    useEffect(() => {
        const correct = parseInt(localStorage.getItem("correctGuesses") || "0", 10);
        const incorrect = parseInt(localStorage.getItem("incorrectGuesses") || "0", 10);
        setCorrectGuesses(correct);
        setIncorrectGuesses(incorrect);
    }, []);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    const handleGuess = (guess: number) => {
        if (guess === randomNumber) {
            setMessage("Grattis! Du gissade rätt!");
            const newCorrectCount = correctGuesses + 1;
            setCorrectGuesses(newCorrectCount);
            localStorage.setItem("correctGuesses", newCorrectCount.toString());
        } else {
            setMessage(`Fel gissning, rätt svar var ${randomNumber}. Försök igen!`);
            const newIncorrectCount = incorrectGuesses + 1;
            setIncorrectGuesses(newIncorrectCount);
            localStorage.setItem("incorrectGuesses", newIncorrectCount.toString());
        }
        setRandomNumber(generateRandomNumber());
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Gissa numret</h1>
            <p>Gissa ett nummer mellan 1 och 10</p>
            <GuessInput onGuess={handleGuess} />
            {message && <p>{message}</p>}
            <div style={{ marginTop: "20px" }}>
                <p>Dina poäng: {correctGuesses}</p>
                <p>Datorns poäng: {incorrectGuesses}</p>
            </div>
        </div>
    );
}

export default HandleGuess;
