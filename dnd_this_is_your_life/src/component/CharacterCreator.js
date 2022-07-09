import React from 'react'
import Accordion from './Accordion';
import Card from './Card';
import RandomButton from './RandomButton';
import {randomRace} from '../data/races';
import { randomBirthplace } from '../data/birthplaces';
import rollDice from '../util/rollDice';
import generateCharacter from '../util/generateCharacter';

const CharacterCreator = () => {
	const [character, setCharacter] = React.useState({
		race: "",
		alignment: "",
		parents: [],
		birthplace: "",
		siblings: "",
		family: "",
		absentParent: "",
		familyLifestyle: "",
		childhoodHome: "",
		childhoodMemories: "",
	});

	return(
	<Accordion
		elements={[
			{
				title: "Origins",
				content: <div className="flex container space-x-1 space-y-1">
					<Card
						title="Race"
						content={
							<div className="text-center">
								<span className="mr-2 block w-full text-center">{character.race.name || "none"}</span>
								<RandomButton 
									onClick={() => {
										const newRace = randomRace();
										setCharacter({...character, race: newRace});
									}}
								/>
							</div>
						}
					/>
					<Card 
						title="Parents"
						content={
							<div className="text-center">
								<p>
									{
									character.parents.length > 0 ?
										character.parents.map(parent => (
											<div>
												{parent.name} - {parent.relationship}, {parent.alignment}, {parent.attitude}
											</div>
										))
									:
										"You do not know who your parents were"
									}
								</p>
								<RandomButton 
									onClick={() => {
										if (rollDice(100) > 95) {
											setCharacter({
												...character,
												parents: [],
											});
										} else {
											setCharacter({
												...character,
												parents: [
													generateCharacter("mother", character.race.name, "female", true),
													generateCharacter("father", character.race.name, "male", true),
												],
											});
										}
									}}
								/>
							</div>
						}
					/>
					<Card
						title="Birthplace"
						content={
							<div className="text-center">
								<span className="mr-2 block w-full text-center">{character.birthplace || "none"}</span>
								<RandomButton 
									onClick={() => {
										setCharacter({
											...character,
											birthplace: randomBirthplace(),
										});
									}}
								/>
							</div>
						}
					/>
				</div>,
			},
			{
				title: "Personal Decisions",
				content: <div>Personal Decisions</div>,
			},
			{
				title: "Life Events",
				content: <div>Life Events</div>,
			},
		]}
	/>
	)
}

export default CharacterCreator;