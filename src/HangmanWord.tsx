import { HangmanWordProps } from "./types";

export function HangmanWord({
	reveal = false,
	guessedLetters,
	wordToGuess,
}: HangmanWordProps) {
	return (
		<div className="hangmanWordContainer">
			{wordToGuess.split("").map((letter, index) => (
				<span className="lettersStyles" key={index}>
					<span
						style={{
							visibility:
								guessedLetters.includes(letter) || reveal
									? "visible"
									: "hidden",
							color:
								!guessedLetters.includes(letter) && reveal
									? "red"
									: "black",
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
}
