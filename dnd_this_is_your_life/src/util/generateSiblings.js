import generateCharacter from "./generateCharacter";
import rollDice from "./rollDice";

const generateSiblings = (race) => {
	const diceRoll = Math.min(Math.max(rollDice(5) + race.siblingMod,0),5);
	const siblingNumbers = [0,rollDice(3),rollDice(4)+1,rollDice(6)+2,rollDice(8)+3];
	const siblingCount = siblingNumbers[diceRoll];
	const siblings = [];

	for (let i = 0; i < siblingCount; i++) {
		const birthOrderRoll = rollDice(6) + rollDice(6);
		let age = "";

		if (birthOrderRoll === 2) {
			age = "Twin";
		} else if (3 <= birthOrderRoll && birthOrderRoll <= 7) {
			age = "Older";
		} else {
			age = "Younger";
		}

		const gender = (Math.floor(Math.random() * 2) === 0 ? "male" : "female");

		siblings.push(generateCharacter(`${age} ${gender === "male" ? "brother" : "sister"}`,race.content,gender));
	}

	return siblings;
};

export default generateSiblings;