// https://www.thedarkfortress.co.uk/tech_reports/3_dice_rolls.php

import rollDiceTable from "../util/rollDiceTable";

const alignments = [
	{
		content: "Chaotic Evil (50%) or Chaotic Neutral (50%)",
		roll: [3],
	},
	{
		content: "Lawful Evil",
		roll: [4,5],
	},
	{
		content: "Neutral Evil",
		roll: [6,7,8],
	},
	{
		content: "Neutral",
		roll: [9,10,11,12],
	},
	{
		content: "Neutral Good",
		roll: [13,14,15],
	},
	{
		content: "Lawful Good",
		roll: [16],
	},
	{
		content: "Lawful Neutral",
		roll: [17],
	},
	{
		content: "Chaotic Good (50%) or Chaotic Neutral (50%)",
		roll: [18],
	},
];

const randomAlignment = () => {
	return rollDiceTable(alignments, 3, 6);
};

export {
	alignments,
	randomAlignment,
};