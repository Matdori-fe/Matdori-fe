'use client';

import { selectedSort } from '@/atoms/shop-list/selectedSort';
import ShopListSort from '@/components/SelectBox/ShopListSort';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function SortWrapper() {
	const [sort, setSelectedSort] = useRecoilState(selectedSort);

	return (
		<>
			<ShopListSort onSelectChange={setSelectedSort} />
		</>
	);
}
