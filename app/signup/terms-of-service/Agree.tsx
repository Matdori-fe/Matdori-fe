import Text from '@/components/Text/Text';
import { RiCheckFill } from 'react-icons/ri';

interface AgreeProps {
	label: string;
	variant: 'check' | 'unCheck';
	onClick: () => void;
}

export default function Agree({ label, variant, onClick }: AgreeProps) {
	return (
		<div
			className='flex items-center gap-[10px] cursor-pointer'
			onClick={onClick}
		>
			<RiCheckFill
				size='14'
				className={variant === 'check' ? 'fill-100' : 'fill-gray'}
			/>
			<Text
				size='sm'
				fontWeight='semibold'
				color={variant === 'check' ? '100' : 'gray'}
			>
				{label}
			</Text>
		</div>
	);
}
