import Text from '@/components/Text/Text';
import BigTitle from '@/components/Title/BigTitle';
import SmallTitle from '@/components/Title/SmallTitle';
import CategoryButtonContainer from '@/components/pages/home/CategoryButtonContainer';

export default function CategorySection() {
	return (
		<div>
			<SmallTitle className='mb-[10px]'>음식 카테고리</SmallTitle>
			<CategoryButtonContainer />
		</div>
	);
}
