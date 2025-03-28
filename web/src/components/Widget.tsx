import { ChatTeardropDots } from 'phosphor-react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {
	/** Not necessary anymore, we are using the Popover component from Headless UI
	// State to manage the visibility of the widget
	// An state in React is a variable that when changed, triggers a re-render of the component
	const [isWidgetOpen, setIsWidgetOpen] = useState(false);

	function toggleWidgetVisibility() {
		setIsWidgetOpen(!isWidgetOpen);
	}
	*/

	return (
		<Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 text-white flex flex-col items-end' >
			<PopoverPanel>
				<WidgetForm />
			</PopoverPanel>
			<PopoverButton className="bg-brand-500 rounded-full px-3 h-12 flex items-center group">
				<ChatTeardropDots className="w-6 h-6"/>

				<span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear'>
					<span className='px-2'>Feedback</span>
				</span>
			</PopoverButton>
		</Popover>
	)
}