import { ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import { Loading } from "../Loading";

interface FeedbackContentStepProps {
	feedbackType: feedbackType;
	onFeedbackRestartRequested: () => void;
	onFeedbackSubmitted: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSubmitted }: FeedbackContentStepProps){
	const [screenshotTaken, setScreenshotTaken] = useState<string | null>(null);
	const [feedbackComment, setFeedbackComment] = useState('');
	const [isSendingFeedback, setIsSendingFeedback] = useState(false);

	function handleScreenshotTaken(screenshot: string | null){
		setScreenshotTaken(screenshot);
	}

	async function handleFeedbackSubmit(event: FormEvent){
		event.preventDefault();

		setIsSendingFeedback(true);

		// Send feedback to the server
		await api.post('/feedbacks', {
			type: feedbackType,
			comment: feedbackComment,
			screenshot: screenshotTaken,
		});
		

		setIsSendingFeedback(false);

		onFeedbackSubmitted();
	}

	const feedbackTypeInfo = feedbackTypes[feedbackType];
	
	return (
		<>
			<header>
				<button 
				className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
				onClick={onFeedbackRestartRequested}>
					<ArrowLeft weight="bold" className="w-4 h-4" />
				</button>

				<span className="text-xl leading-6 flex items-center gap-2">
					<img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
					{feedbackTypeInfo.title}
				</span>
				
				<CloseButton />
			</header>

			<form className="my-4 w-full">
				<textarea 
					className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 border-2 border-solid p-2 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus-ring-1 focus:outline-none resize-none"
					placeholder="Type your feedback here..."
					onChange={event => setFeedbackComment(event.target.value)}
				/>
				
				<footer className="flex gap-2 mt-2">
					<ScreenshotButton 
						screenshot={screenshotTaken}
						onScreenshotTaken={handleScreenshotTaken} 
					/>

					<button 
						type="submit"
						disabled={!feedbackComment || isSendingFeedback}
						onClick={handleFeedbackSubmit}
						className="p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
					>
						{isSendingFeedback ? <Loading/> : 'Send feedback'}
					</button>
				</footer>
			</form>
		</>
	)
}