const HEAD = <div className="drawingHead" />;
const BODY = <div className="drawingBody" />;
const R_ARM = <div className="drawingRArm" />;
const L_ARM = <div className="drawingLArm" />;
const R_LEG = <div className="drawingRLeg" />;
const L_LEG = <div className="drawingLLeg" />;
const BODY_PARTS = [HEAD, BODY, R_ARM, L_ARM, R_LEG, L_LEG];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
	return (
		<div className="hangmanDrawingContainer">
			{BODY_PARTS.slice(0, numberOfGuesses)}
			<div className="drawingAbsoluteLine" />
			<div className="drawingHangingHorizontalLine" />
			<div className="drawingVerticalLine" />
			<div className="drawingHorizontalLine" />
		</div>
	);
}
