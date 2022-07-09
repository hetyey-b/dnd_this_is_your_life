import weightedRoll from "../util/weightedRoll";

const occupations = [
	{
		content: "Academic", 
		weight: 5,
	},
	{
		content: "Adventurer", 
		weight: 5,
	},
	{
		content: "Aristocrat", 
		weight: 1,
	},
	{
		content: "Artisan or guild member", 
		weight: 15,
	},
	{
		content: "Criminal", 
		weight: 5,
	},
	{
		content: "Entertainer", 
		weight: 5,
	},
	{
		content: "Exile, hermit, or refugee", 
		weight: 2,
	},
	{
		content: "Explorer or wanderer", 
		weight: 5,
	},
	{
		content: "Farmer or herder", 
		weight: 12,
	},
	{
		content: "Hunter or trapper", 
		weight: 5,
	},
	{
		content: "Laborer", 
		weight: 15,
	},
	{
		content: "Merchant", 
		weight: 5,
	},
	{
		content: "Politician", 
		weight: 5,
	},
	{
		content: "Priest", 
		weight: 5,
	},
	{
		content: "Sailor", 
		weight: 5,
	},
	{
		content: "Soldier", 
		weight: 5,
	},
];

const randomOccupation = () => {
	return weightedRoll(occupations.map(el => el.content), occupations.map(el => el.weight));
};

export {
	occupations,
	randomOccupation,
}