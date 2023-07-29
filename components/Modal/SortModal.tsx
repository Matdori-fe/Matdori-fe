'use client';

import { AnimatePresence } from 'framer-motion';
import ModalLayout from './ModalLayout';
import { SelectedSortAtom, SortListAtom } from '@/app/status/sortAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import Link from 'next/link';

export default function SortModal({ showModal }: { showModal: boolean }) {
	const sortList = useRecoilValue(SortListAtom);
	const [selectedSort, setSelectedSort] = useRecoilState(SelectedSortAtom);

	// FIXME: 리펙토링. 하나의 관리하는 모듈을 만드는 것이 좋을 듯
	const handleSelectSort = (i: number): boolean[] => {
		const falseArr = new Array(4).fill(false);
		falseArr[i] = true;

		return falseArr;
	};

	// TODO: 선택된 정렬을 서버로 보내서 데이터를 받아오는 로직이 필요
	return (
		<AnimatePresence>
			{showModal && (
				<ModalLayout title='정렬' href='/'>
					<ul className='flex-col w-full'>
						{sortList.map((sortType, i) => (
							<Link href='/' key={sortType} scroll={false}>
								<li
									className={`mb-[32px] ${selectedSort[i] && 'text-100'}`}
									onClick={() => setSelectedSort(() => handleSelectSort(i))}
								>
									{sortType}
								</li>
							</Link>
						))}
					</ul>
				</ModalLayout>
			)}
		</AnimatePresence>
	);
}

// FIXME: a 태그 속 a 구조가 문제같음.
