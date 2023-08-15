import { RiAwardFill } from 'react-icons/ri';
import Text from '../Text/Text';

export default function BestJokbo({
	content,
	className,
}: {
	content: string;
	className: string;
}) {
	return (
		<div className={`flex gap-[7px] flex-wrap items-center ${className}`}>
			<RiAwardFill size='14' className='fill-100' />
			<div className='w-[calc(100%-21px)]'>
				<Text
					size='xs'
					className='overflow-hidden whitespace-nowrap overflow-ellipsis'
				>
					{content}
				</Text>
			</div>
		</div>
	);
}
