'use client';

import { top3SortAtom } from '@/atoms/home/top3SortAtom';
import { selectedSort } from '@/atoms/shop-list/selectedSort';
import ShopListSort from '@/components/SelectBox/ShopListSort';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function SortWrapper() {
	const [sort, setSelectedSort] = useRecoilState(top3SortAtom);

	return (
		<>
			<ShopListSort onSelectChange={setSelectedSort} />
		</>
	);
}
