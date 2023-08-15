import Text from '@/components/Text/Text';
import BigTitle from '@/components/Title/BigTitle';
import CategoryButtonContainer from '@/components/pages/home/CategoryButtonContainer';

export default function CategorySection() {
	return (
		<div>
			<BigTitle className='mb-[10px]'>카테고리</BigTitle>
			<Text size='xs' color='gray' className='mb-[12px]'>
				카테고리를 직접 선택해 가게를 검색해보세요.
			</Text>
			<CategoryButtonContainer />
		</div>
	);
}
