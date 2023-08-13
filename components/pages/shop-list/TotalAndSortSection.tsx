import SortButton from '@/components/SortButton/SortButton';
import Text from '@/components/Text/Text';

export default function TotalAndSortSection({ count }: { count: number }) {
	return (
		<div className='flex items-center justify-between mb-[10px]'>
			<Text size='sm' fontWeight='semibold'>
				총 <span className='text-100'>{count}</span>건
			</Text>
			<SortButton label='최신순' />
		</div>
	);
}
