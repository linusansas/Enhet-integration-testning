import { FormEvent, useState } from "react";

interface Props {
    onSubmit: (text: number) => void;
}

function GuessForm(props: Props) {
    const [guess, setGuess] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onSubmit(Number(guess));
    };

    return (
        <form>
            <input type="text" placeholder="Enter your guess" value={guess} onChange={(e) => setGuess(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default GuessForm;
