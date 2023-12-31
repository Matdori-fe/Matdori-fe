import { RiCheckFill } from 'react-icons/ri';
import Text from '../Text/Text';
import { Variant } from '@/app/edit-my-profile/nickname/nicknameErrorMessage';

interface CheckNotification {
	label: string;
	variant: Variant;
}

export default function CheckNotification({
	label,
	variant,
}: CheckNotification) {
	return (
		<div className='flex w-full gap-[4px] items-center'>
			<RiCheckFill
				size='14'
				className={variant === 'valid' ? 'fill-blue' : 'fill-100'}
			/>
			<Text size='xs' color={variant === 'valid' ? 'blue' : '100'}>
				{label}
			</Text>
		</div>
	);
}
