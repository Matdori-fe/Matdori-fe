'use client';

import { searchAtom } from '@/atoms/search/searchAtom';
import Input from '@/components/Input/Input';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function SearchBarSection() {
	const [searchInput, setSearchInput] = useRecoilState(searchAtom);
	const router = useRouter();

	return (
		<div>
			<Input
				inputSize='small'
				left='back'
				placeHolder='무엇이든 검색해보세요.'
				right='cancel'
				value={searchInput}
				onChange={(e) => {
					if (e.target.value === '') router.push('/search');
					setSearchInput(e.target.value);
				}}
			/>
		</div>
	);
}
