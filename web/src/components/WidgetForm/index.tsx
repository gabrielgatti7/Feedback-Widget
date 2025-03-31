import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageURL from "../../assets/bug.svg";
import ideaImageURL from "../../assets/idea.svg";
import thoughtImageURL from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

// eslint-disable-next-line react-refresh/only-export-components
export const feedbackTypes = {
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
export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
	//useState<feedbackType | null>(null) => feedbackType or null is the type of the state, null is the initial value
	const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

	function handleRestartFeedback(){
		setFeedbackType(null);
	}

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

			{/* If feedbackType is null, show feedback options */}
			{!feedbackType ? (
				<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
			) : (
				<FeedbackContentStep 
					feedbackType={feedbackType}
					onFeedbackRestartRequested={handleRestartFeedback}
				/>
			)}
			
		</div>
	)
}