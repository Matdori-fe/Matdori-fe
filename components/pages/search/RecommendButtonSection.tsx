import SmallButtonBar from '@/components/Button/SmallButton';
import Text from '@/components/Text/Text';
import BigTitle from '@/components/Title/BigTitle';
import SmallTitle from '@/components/Title/SmallTitle';
import { useFetcher } from '@/hooks/useFetcher';
import {
	RecommendedMenuList,
	getRecommendedMenuList,
} from '@/lib/shop/getRecommendedMenu';
import { useEffect } from 'react';

// TODO: 시간에 따라 점심, 저녁, 야식으로 바꿔야한다.
export default function RecommendButtonsSection() {
	return (
		<div>
			<SmallTitle className='mb-[10px]'>맛도리에게 추천받기</SmallTitle>
			<div className='flex justify-between gap-[10px]'>
				<SmallButtonBar type='whiteStoreRecommend' />
				<SmallButtonBar type='whiteMenuRecommend' />
			</div>
		</div>
	);
}
