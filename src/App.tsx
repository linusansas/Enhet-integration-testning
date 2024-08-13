import { useState } from "react";
import "./App.css";
import GuessForm from "./components/GuessForm";

function App() {
    const [guesses, setGuesses] = useState<number[]>([]);

    return (
        <>
            <div>
                <h1>Guess a number</h1>
                <GuessForm onSubmit={(number) => setGuesses([...guesses, number])} />
            </div>
            <ul>
                {guesses.map((guesses) => (
                    <li key={guesses}>{guesses}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
