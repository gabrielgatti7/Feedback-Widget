import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: feedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
	return (
		// React Fragment
		<>
			<header>
				<span className="text-xl leading-6">Deixe seu feedback</span>
				<CloseButton />
			</header>

			<div className="flex py-8 gap-2 w-full">
				{Object.entries(feedbackTypes).map(([type, { title, image }]) => (
					<button
						key={type}
						className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
						onClick={() => onFeedbackTypeChanged(type as feedbackType)}
					>
						<img src={image.source} alt={image.alt} className="w-12 h-12"/>
						<span>{title}</span>
					</button>
				))}
			</div>
		</>)
}