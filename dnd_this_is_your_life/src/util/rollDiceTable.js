import rollDice from "./rollDice";

const rollDiceTable = (table, ammount, dice) => {
	let sum = 0;
	for(let i = 0; i < ammount; i++) {
		sum += rollDice(dice);
	}

	let result = null
	table.forEach(element => {
		if (element.roll.includes(sum)) {
			result = element.content;
		}
	});

	return result;
};

export default rollDiceTable;