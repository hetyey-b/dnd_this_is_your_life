import React from 'react'

const Accordion = ({elements}) => {
	return(
		<div class="accordion" id="accordionParent">
			{
				elements.map((element,idx) => (
					<div class="accordion-item bg-white border border-gray-200">
						<h2 class="accordion-header mb-0" id={`heading-${idx}`}>
							<button class="
								accordion-button
								relative
								flex
								items-center
								w-full
								py-4
								px-5
								text-base text-gray-800 text-left
								bg-white
								border-0
								rounded-none
								transition
								focus:outline-none
							" 
								type="button" data-bs-toggle="collapse" 
								data-bs-target={`#collapse-${idx}`} aria-expanded="true"
								aria-controls={`collapse-${idx}`}>
								{element.title}
							</button>
						</h2>
						<div 
							id={`collapse-${idx}`} class="accordion-collapse collapse" 
							aria-labelledby={`heading-${idx}`}
							data-bs-parent="#accordionParent"
						>
							<div class="accordion-body py-4 px-5">
								{element.content}
							</div>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Accordion;