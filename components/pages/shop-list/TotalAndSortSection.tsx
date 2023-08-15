import ModalContainer from '@/components/ModalContainer/ModalContainer';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import ModalOpener from '@/components/ModalOpener/ModalOpener';
import OlderSelectBox from '@/components/SelectBox/OrderSelectBox';
import SortButton from '@/components/SortButton/SortButton';
import Text from '@/components/Text/Text';

export default function TotalAndSortSection({ count }: { count: number }) {
	return (
		<div className='flex items-center justify-between mb-[10px]'>
			<Text size='sm' fontWeight='semibold'>
				총 <span className='text-100'>{count}</span>건
			</Text>
			<ModalContainer />
		</div>
	);
}
