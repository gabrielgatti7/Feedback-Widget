import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImageURL from "../assets/bug.svg";
import ideaImageURL from "../assets/idea.svg";
import thoughtImageURL from "../assets/thought.svg";

const feedbackTypes = {
	BUG: {
		title: "Problem",
		image: {
			source: bugImageURL,
			alt: "Bug icon",
		}
	},
	IDEA: {
		title: "Idea",
		image: {
			source: ideaImageURL,
			alt: "Lightbulb icon",
		}
	},
	OTHER: {
		title: "Other",
		image: {
			source: thoughtImageURL,
			alt: "Thinking cloud icon",
		}
	}
}

// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs
// Object.entries().map() returns an array of the same length as the input array, where each element is the result of the callback function
// Object.entries(feedbackTypes) => 
/**
 * 	[
 * 		[BUG, {...}],
 * 		[IDEA, {...}],
 * 		[OTHER, {...}]
 *  ]
 */ 

// keyof typeof feedbackTypes => "BUG" | "IDEA" | "OTHER"
type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
	//useState<feedbackType | null>(null) => feedbackType or null is the type of the state, null is the initial value
	const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header>
				<span className="text-xl leading-6">Deixe seu feedback</span>
				<CloseButton />
			</header>

			{/* If feedbackType is null, show feedback options */}
			{!feedbackType ? (
				<div className="flex py-8 gap-2 w-full">
					{Object.entries(feedbackTypes).map(([type, { title, image }]) => (
						<button
							key={type}
							className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
							onClick={() => setFeedbackType(type as feedbackType)}
						>
							<img src={image.source} alt={image.alt} className="w-12 h-12"/>
							<span>{title}</span>
						</button>
					))}
				</div>
			) : (
				<h1>Feedback Form</h1>
			)}
			
		</div>
	)
}