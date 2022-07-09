import React from 'react'
import {FaDiceD20} from 'react-icons/fa';

const RandomButton = ({onClick}) => {
	return(
		<button
			className="bg-gray-700 hover:bg-gray-500 text-white font-bold px-2 py-1 rounded"
			onClick={onClick}
		>
			<FaDiceD20 />
		</button>
	)
}

export default RandomButton;