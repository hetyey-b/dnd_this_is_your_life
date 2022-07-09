const weightedRoll = (items, weights) => {
	let i;

	for (i = 0; i < weights.length; i++) {
		weights[i] += weights[i - 1] || 0;
	}

	var random = Math.random() * weights[weights.length - 1];

	for(i = 0; i < weights.length; i++) {
		if (weights[i] > random) {
			break;
		}
	}

	return items[i];
}

export default weightedRoll;