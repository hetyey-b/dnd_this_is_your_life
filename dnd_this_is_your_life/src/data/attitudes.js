import rollDiceTable from "../util/rollDiceTable";

const attitudes = [
	{
		content: "Hostile",
		roll: [3,4],
	},
	{
		content: "Friendly",
		roll: [5,6,7,8,9,10],
	},
	{
		content: "Indifferent",
		roll: [11,12],
	},
];

const randomAttitude = () => {
	return rollDiceTable(attitudes,3,4);
};

export {
	attitudes,
	randomAttitude,
};