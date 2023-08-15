<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import ModalContainer from '@/components/ModalContainer/ModalContainer';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import ModalOpener from '@/components/ModalOpener/ModalOpener';
import OlderSelectBox from '@/components/SelectBox/OrderSelectBox';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
import ModalContainer from '@/components/ModalContainer/ModalContainer';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import ModalOpener from '@/components/ModalOpener/ModalOpener';
>>>>>>> 97de80c ([MATDORI-62] feat: category 페이지 완성)
import SortButton from '@/components/SortButton/SortButton';
import Text from '@/components/Text/Text';

export default function TotalAndSortSection({ count }: { count: number }) {
	return (
		<div className='flex items-center justify-between mb-[10px]'>
			<Text size='sm' fontWeight='semibold'>
				총 <span className='text-100'>{count}</span>건
			</Text>
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
			<SortButton label='최신순' />
=======
=======
>>>>>>> Stashed changes
			<OlderSelectBox />
			<ModalContainer />
>>>>>>> Stashed changes
=======
			<ModalOpener type='department'>
				<SortButton label='최신순' />
			</ModalOpener>
			<ModalContainer />
>>>>>>> 97de80c ([MATDORI-62] feat: category 페이지 완성)
		</div>
	);
}
