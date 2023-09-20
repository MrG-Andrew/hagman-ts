export type HangmanDrawingProps = {
    numberOfGuesses: number
}
export type HangmanWordProps = {
    reveal?: boolean,
    guessedLetters: string[],
    wordToGuess: string
}
export type KeyboardProps = {
    disabled?:boolean
    activeLetters:string[],
    inactiveLetters:string[],
    addGuessedLetter:(letter: string)=>void
}