import Text from '../Text/Text';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export type Left = 'back' | 'logo' | undefined;
export type Right =
	| 'search'
	| 'share'
	| 'like'
	| 'more'
	| 'trashCan'
	| 'check'
	| undefined;

interface HeaderProps {
	left?: Left;
	right?: Right[] | Right;
	button?: React.ReactNode;
	title?: string;
}

export default function Header({ left, right, button, title }: HeaderProps) {
	return (
		<div className='w-full h-[60px] flex items-center px-4 gap-3.5 [&_p]:flex-1 fixed top-0 bg-white'>
			<HeaderLeft left={left} />
			<Text size='lg' fontWeight='bold'>
				{title}
			</Text>
			<HeaderRight right={right} button={button} />
		</div>
	);
}
