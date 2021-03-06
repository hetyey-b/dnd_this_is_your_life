import React from 'react'

const Card = ({title, content, width = 1}) => {
	return(
		<div className={`col-span-${width}`}>
			<div className="block p-6 rounded-lg shadow-lg bg-white w-full">
				<h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{title}</h5>
				<p className="text-gray-700 text-base mb-4">
					{content}
				</p>
			</div>
		</div>
	)
}

export default Card;