import React from 'react'
import Accordion from './Accordion';
import Card from './Card';
import RandomButton from './RandomButton';
import {randomRace} from '../data/races';
import { randomBirthplace } from '../data/birthplaces';
import rollDice from '../util/rollDice';
import generateCharacter from '../util/generateCharacter';
import generateSiblings from '../util/generateSiblings';

const CharacterCreator = () => {
	const [character, setCharacter] = React.useState({
		race: "",
		alignment: "",
		parents: [],
		birthplace: "",
		siblings: [],
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
				content: <div className="grid grid-cols-5 gap-4">
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
						width={2}
						content={
							<div className="text-center">
								<p>
									{
									character.parents.length > 0 ?
										character.parents.map(parent => (
											<div>
												{parent.name} - {parent.relationship}, {parent.alignment}, {parent.attitude}, {parent.occupation} {parent.chClass}
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
					<Card
						title={`Siblings - ${character.siblings.length}`}
						width={4}
						content={
							<div className="text-center">
								<ul>
									{
										character.siblings.length > 0 ?
										character.siblings.map(sibling => (
											<li>
												<div>
													<span className="block">
														{sibling.name} - {sibling.relationship}, {sibling.alignment}, {sibling.attitude}, {sibling.occupation} {sibling.chClass}- {sibling.status} {sibling.causeOfDeath}
													</span>
												</div>
											</li>
										))
										:
										"Only child"
									}
								</ul>
								<RandomButton 
									onClick={() => {
										setCharacter({...character, siblings: generateSiblings(character.race)});
									}}
								/>
							</div>
						}
					/>
					<Card
						title=""
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