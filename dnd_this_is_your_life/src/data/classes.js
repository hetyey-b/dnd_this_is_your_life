import weightedRoll from "../util/weightedRoll";

const classes = [
	{
		content: "Artificer",
		weight: 7,
	},
	{
		content: "Barbarian",
		weight: 7,
	},
	{
		content: "Bard",
		weight: 7,
	},
	{
		content: "Cleric",
		weight: 15,
	},
	{
		content: "Druid",
		weight: 7,
	},
	{
		content: "Fighter",
		weight: 15,
	},
	{
		content: "Monk",
		weight: 6,
	},
	{
		content: "Paladin",
		weight: 6,
	},
	{
		content: "Ranger",
		weight: 6,
	},
	{
		content: "Rogue",
		weight: 15,
	},
	{
		content: "Sorcerer",
		weight: 5,
	},
	{
		content: "Warlock",
		weight: 5,
	},
	{
		content: "Wizard",
		weight: 6,
	},
];

const randomClass = () => {
	return weightedRoll(classes.map(el => el.content), classes.map(el => el.weight));
};

export {
	classes,
	randomClass,
}