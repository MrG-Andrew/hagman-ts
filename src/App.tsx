import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord() {
	return words[Math.floor(Math.random() * words.length)];
}
function App() {
	const [wordToGuess, setWordToGuess] = useState<string>(getWord);

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const incorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	const isLoser = incorrectLetters.length >= 6;
	const isWinner = wordToGuess
		.split("")
		.every((letter) => guessedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;
			setGuessedLetters((currentLetters) => [...currentLetters, letter]);
		},
		[guessedLetters, isLoser, isWinner]
	);

	useEffect(() => {
		const handleKeyboardPressed = (e: KeyboardEvent) => {
			const key = e.key;
			if (!key.match(/^[a-z]$/)) return;
			e.preventDefault();
			addGuessedLetter(key);
		};
		document.addEventListener("keypress", handleKeyboardPressed);
		return () => {
			document.removeEventListener("keypress", handleKeyboardPressed);
		};
	}, [guessedLetters]);

	useEffect(() => {
		const handleKeyboardPressed = (e: KeyboardEvent) => {
			const key = e.key;
			if (key !== "Enter") return;
			e.preventDefault();
			setGuessedLetters([]);
			setWordToGuess(getWord());
		};
		document.addEventListener("keypress", handleKeyboardPressed);
		return () => {
			document.removeEventListener("keypress", handleKeyboardPressed);
		};
	}, []);

	return (
		<div className="mainContainer">
			<div className="winningLosingMsg">
				{isWinner && "Winner! - Press 'Enter' to try again"}
				{isLoser && "Nice Try - Press 'Enter' to try again"}
			</div>
			<HangmanDrawing numberOfGuesses={incorrectLetters.length} />
			<HangmanWord
				reveal={isLoser}
				guessedLetters={guessedLetters}
				wordToGuess={wordToGuess}
			/>
			<Keyboard
				disabled={isWinner || isLoser}
				activeLetters={guessedLetters.filter((letter) =>
					wordToGuess.includes(letter)
				)}
				inactiveLetters={incorrectLetters}
				addGuessedLetter={addGuessedLetter}
			/>
		</div>
	);
}

export default App;
