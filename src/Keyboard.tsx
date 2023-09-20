import KEYS from "./allLetters.json";
import { KeyboardProps } from "./types";
export function Keyboard({
	disabled = false,
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
}: KeyboardProps) {
	return (
		<div className="stretchedContainer">
			<div className="keyboardContainer">
				{KEYS.map((key) => {
					const isActive = activeLetters.includes(key);
					const isInActive = inactiveLetters.includes(key);
					return (
						<button
							onClick={() => addGuessedLetter(key)}
							className={`keyboardBtn ${
								isActive ? "active" : ""
							} ${isInActive ? "inactive" : ""}`}
							key={key}
							disabled={isActive || isInActive || disabled}
						>
							{key}
						</button>
					);
				})}
			</div>
		</div>
	);
}
