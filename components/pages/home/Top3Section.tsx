'use client';

import SmallTitle from '@/components/Title/SmallTitle';
import BigTitle from '@/components/Title/BigTitle';

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { AxiosResponse } from 'axios';
import Top3Item from './Top3Item';
import SortWrapper from './SortWrapper';
import { getTop3List } from '@/lib/home/getTop3List';
import { Top3List, top3SortAtom } from '@/atoms/home/top3SortAtom';
import Loading from '@/components/Loading/Loading';
import ErrorPpok from '@/components/Error/ErrorPpok';

export default function Top3Section() {
	const sortType = useRecoilValue(top3SortAtom);
	const { data, error, isLoading } = useQuery<AxiosResponse<Top3List>>(
		['top', sortType],
		() => getTop3List(sortType)
	);

	return (
		<div>
			<div className='flex items-center justify-between mb-[12px]'>
				<BigTitle>맛도리 TOP 3</BigTitle>
				<SortWrapper />
			</div>
			<div>
				{isLoading && <Loading />}
				{error && <ErrorPpok />}
				{data?.data.result.map((item, i) => (
					<Top3Item {...item} id={i} key={i} />
				))}
			</div>
		</div>
	);
}
