import { randomAlignment } from "../data/alignments";
import { randomAttitude } from "../data/attitudes";
import { randomCauseOfDeath } from "../data/causeOfDeath";
import { randomClass } from "../data/classes";
import { randomOccupation } from "../data/occupations";
import { randomRace } from "../data/races";
import { randomStatus } from "./status";

const generateCharacter = (relationship, race, gender, skipGenerateStatus = false) => {
	const	pcRace = race || randomRace();
	const	alignment = randomAlignment();
	const	occupation = randomOccupation();
	const	chClass = occupation === "Adventurer" ? randomClass() : null;
	const attitude = randomAttitude();
	const status = randomStatus();
	const causeOfDeath = status === "Dead" ? randomCauseOfDeath() : null;
	const chGender = gender || (Math.floor(Math.random() * 2) === 0 ? "male" : "female");
	const name = "Anonymus";

	if (skipGenerateStatus) {
		return {
			name,
			relationship,
			race: pcRace,
			gender: chGender,
			alignment,
			occupation,
			chClass,
			attitude,
		};
	}

	return {
		name,
		relationship,
		race: pcRace,
		gender: chGender,
		alignment,
		occupation,
		chClass,
		attitude,
		status,
		causeOfDeath,
	};
};

export default generateCharacter;