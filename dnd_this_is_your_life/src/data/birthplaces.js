import weightedRoll from "../util/weightedRoll";

const birthplaces = [
	{
		content: "Home",
		weight: 50,
	},
	{
		content: "Home of a family friend",
		weight: 5,
	},
	{
		content: "Home of a healer or midwife",
		weight: 8,
	},
	{
		content: "Carriage cart or wagon",
		weight: 2,
	},
	{
		content: "Barn, shed, or other building",
		weight: 3,
	},
	{
		content: "Cave",
		weight: 2,
	},
	{
		content: "Field",
		weight: 2,
	},
	{
		content: "Forest",
		weight: 2,
	},
	{
		content: "Temple",
		weight: 3,
	},
	{
		content: "Battlefield",
		weight: 1,
	},
	{
		content: "Alley or street",
		weight: 2,
	},
	{
		content: "Brothel, tavern or inn",
		weight: 2,
	},
	{
		content: "Castle, keep, tower or palace",
		weight: 2,
	},
	{
		content: "Sewer or rubbish heap",
		weight: 1,
	},
	{
		content: "Among people of a different race",
		weight: 2,
	},
	{
		content: "On board a boat or a ship",
		weight: 3,
	},
	{
		content: "In a prison or in the headquarters of a secret organization",
		weight: 2,
	},
	{
		content: "In a sage's laboratory",
		weight: 2,
	},
	{
		content: "In the Feywild",
		weight: 1,
	},
	{
		content: "In the Shadowfell",
		weight: 1,
	},
	{
		content: "On the Astral Plane or Ethereal Plane",
		weight: 1,
	},
	{
		content: "On an Inner Plane of your choice",
		weight: 1,
	},
	{
		content: "On an Outer Plane of your choice",
		weight: 1,
	},
];

const randomBirthplace = () => {
	return weightedRoll(birthplaces.map(el => el.content), birthplaces.map(el => el.weight));
};

export {
	birthplaces,
	randomBirthplace,
};