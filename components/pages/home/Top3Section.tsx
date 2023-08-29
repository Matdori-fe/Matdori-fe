'use client';

import SmallTitle from '@/components/Title/SmallTitle';
import BigTitle from '@/components/Title/BigTitle';
import Top3Item from './Top3Item';

import SortWrapper from './SortWrapper';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Top3List, top3SortAtom } from '@/atoms/home/top3SortAtom';
import { useRecoilValue } from 'recoil';
import { getTop3List } from '@/lib/home/getTop3List';
import { AxiosResponse } from 'axios';

export default function Top3Section() {
	const sortType = useRecoilValue(top3SortAtom);
	const { data, error, isLoading } = useQuery<AxiosResponse<Top3List>>(
		'top',
		() => getTop3List(sortType)
	);

	return (
		<div>
			<div className='flex items-center justify-between mb-[12px]'>
				<BigTitle>맛도리 TOP 3</BigTitle>
				<SortWrapper />
			</div>
			<div>
				{data?.data.result.map((item, i) => (
					<Top3Item {...item} id={i} />
				))}
			</div>
		</div>
	);
}
