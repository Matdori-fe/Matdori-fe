import ModalContainer from '@/components/ModalContainer/ModalContainer';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import ModalOpener from '@/components/ModalOpener/ModalOpener';
import CustomSelect from '@/components/SelectBox/CustomSelect';
import OlderSelectBox from '@/components/SelectBox/OrderSelectBox';
import SortButton from '@/components/SortButton/SortButton';
import Text from '@/components/Text/Text';

export default async function TotalAndSortSection({
	count,
	category,
}: {
	count: number;
	category: string;
}) {
	const { result } = await getTotalShopCount(category);

	return (
		<div className='flex items-center justify-between mb-[10px]'>
			<Text size='sm' fontWeight='semibold'>
				총 <span className='text-100'>{result.totalCount}</span>건
			</Text>
		</div>
	);
}

// TODO: 총 개수 주는걸로 api바꾸기
const getTotalShopCount = async (category: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API}/store-count?category=${category}`,
		{ cache: 'no-store' }
	);

	return response.json();
};
