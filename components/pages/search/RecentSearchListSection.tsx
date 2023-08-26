'use client';

import RoundButton from '@/components/RoundButton/RoundButton';
import Text from '@/components/Text/Text';
import SmallTitle from '@/components/Title/SmallTitle';
import RecentSearchItem from './RecentSearchItem';

export default function RecentSearchListSection() {
	const recentSearchList = JSON.parse(
		localStorage.getItem('recent-search-list')
	);
	console.log(recentSearchList);
	return (
		<div>
			<div className='flex justify-between w-full mb-[10px]'>
				<SmallTitle
					sideComponent={
						<RoundButton label='검색 기록 전체 삭제' variant='small' />
					}
				>
					최근 검색어
				</SmallTitle>
			</div>

			{recentSearchList.length !== 0 ? (
				<div className='flex flex-wrap gap-[7px]'>
					{recentSearchList.map((item) => (
						<RecentSearchItem label={item} />
					))}
				</div>
			) : (
				<Text color='darkGray' size='xs'>
					최근 검색어가 없습니다.
				</Text>
			)}
		</div>
	);
}
