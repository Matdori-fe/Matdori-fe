import Text from '@/components/Text/Text';
import { RiCloseFill } from 'react-icons/ri';

export default function RecentSearchItem({ label }) {
	return (
		<div className='gap-[10px] border flex items-center border-lightGray rounded-basic px-[10px] py-[4px] w-fit'>
			<Text size='xs' color='darkGray'>
				{label}
			</Text>
			<RiCloseFill size='14' />
		</div>
	);
}
