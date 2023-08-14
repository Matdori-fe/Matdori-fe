import SmallButtonBar from '@/components/Button/SmallButton';
import Text from '@/components/Text/Text';
import BigTitle from '@/components/Title/BigTitle';

// TODO: 시간에 따라 점심, 저녁, 야식으로 바꿔야한다.
export default function RecommendButtonsSection() {
	return (
		<div>
			<BigTitle className='mb-[10px]'>맛도리에게 추천받기</BigTitle>
			<Text size='xs' color='gray' className='mb-[12px]'>
				맛도리가 추천해주는 가게와 메뉴를 살펴보세요.
			</Text>
			<div className='flex justify-between gap-[10px]'>
				<SmallButtonBar type='redStoreRecommend' />
				<SmallButtonBar type='redMenuRecommend' />
			</div>
		</div>
	);
}
