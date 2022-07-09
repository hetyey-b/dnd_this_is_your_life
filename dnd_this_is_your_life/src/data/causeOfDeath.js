import weightedRoll from "../util/weightedRoll";

const causeOfDeath = [
  {
    content: "Unknown",
    weight: 1,
  },
  {
    content: "Murdered",
    weight: 1,
  },
  {
    content: "Killed in battle",
    weight: 1,
  },
  {
    content: "Accident related to class or occupation",
    weight: 1,
  },
  {
    content: "Accident unrelated to class or occupation",
    weight: 1,
  },
  {
    content: "Natural causes, such as disease or old age",
    weight: 2,
  },
  {
    content: "Apparent suicide",
    weight: 1,
  },
  {
    content: "Torn apart by an animal or a natural disaster",
    weight: 1,
  },
  {
    content: "Consumed by a monster",
    weight: 1,
  },
  {
    content: "Executed for a crime or tortured to death",
    weight: 1,
  },
  {
    content:
      "Bizarre event, such as being hit by a meteorite, struck down by an angry god, or killed by a hatching slaad egg",
    weight: 1,
  },
];

const randomCauseOfDeath = () => {
  return weightedRoll(
    causeOfDeath.map((el) => el.content),
    causeOfDeath.map((el) => el.weight)
  );
};

export { causeOfDeath, randomCauseOfDeath };
