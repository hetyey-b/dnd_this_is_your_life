import rollDiceTable from "./rollDiceTable";

const statuses = [
	{
		content: "Dead",
		roll: [3],
	},
	{
		content: "Missing or unknown",
		roll: [4,5],
	},
	{
		content: "Alive, but doing poorly due to injury, financial trouble, or relationship difficulties",
		roll: [6,7,8],
	},
	{
		content: "Alive and well",
		roll: [9,10,11,12],
	},
	{
		content: "Alive and quite successful",
		roll: [13,14,15],
	},
	{
		content: "Alive and famous",
		roll: [16,17],
	},
	{
		content: "Alive and famous",
		roll: [18],
	},
];

const randomStatus = () => {
	return rollDiceTable(statuses,3,6);
}

export {
	statuses,
	randomStatus,
}