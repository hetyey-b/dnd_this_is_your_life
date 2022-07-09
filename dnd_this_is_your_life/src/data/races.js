import weightedRoll from "../util/weightedRoll";

const races = [
	{
		content: {
			name: "Human",
			siblingMod: 0,
		},
		weight: 40,
	},
	{
		content: {
			name: "Hill Dwarf",
			siblingMod: -2,
		},
		weight: 5,
	},
	{
		content: {
			name: "Mountain Dwarf",
			siblingMod: -2,
		},
		weight: 5,
	},
	{
		content: {
			name: "Elf",
			siblingMod: -2,
		},
		weight: 10,
	},
	{
		content: {
			name: "Lightfoot Halfling",
			siblingMod: 0,
		},
		weight: 5,
	},
	{
		content: {
			name: "Stout Halfling",
			siblingMod: 0,
		},
		weight: 5,
	},
	{
		content: {
			name: "Dragonborn",
			siblingMod: 0,
		},
		weight: 5,
	},
	{
		content: {
			name: "Gnome",
			siblingMod: 0,
		},
		weight: 5,
	},
	{
		content: {
			name: "Half-elf",
			siblingMod: 0,
		},
		weight: 5,
	},
	{
		content: {
			name: "Half-orc",
			siblingMod: 0,
		},
		weight: 5,
	},
	{
		content: {
			name: "Tiefling",
			siblingMod: 0,
		},
		weight: 5,
	},
];

const randomRace = () => {
	return weightedRoll(races.map(race => race.content), races.map(race => race.weight))
};

export {
	races,
	randomRace,
};