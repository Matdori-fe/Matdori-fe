'use client';

import { AnimatePresence } from 'framer-motion';
import ModalLayout from './ModalLayout';
import { SelectedSortAtom, SortListAtom } from '@/app/status/SortAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

// TODO: 선택된 과를 어디에 저장해서 사용할지 생각해야 한다. 선택된건 빨간색으로 표시하고 화면에도 띄울 것이기 때문임
export default function DepartmentModal({
	showModal,
	href,
}: {
	showModal: boolean;
	href: string;
}) {
	const router = useRouter();
	const sortList = useRecoilValue(SortListAtom);
	const [selectedSort, setSelectedSort] = useRecoilState(SelectedSortAtom);

	// FIXME: 리펙토링. 하나의 관리하는 모듈을 만드는 것이 좋을 듯
	const handleSelectSort = (i: number): boolean[] => {
		const falseArr = new Array(4).fill(false);
		falseArr[i] = true;

		return falseArr;
	};

	const [names, setNames] = useState([]);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((r) => setNames(r.data));
	}, []);

	return (
		<AnimatePresence>
			{showModal && (
				<ModalLayout title='정렬' href={href} variant='large'>
					{/* TODO: 여기 높이 바꿔야함 */}
					<ul className='flex-col w-full overflow-scroll h-[1000px] scrollbar-hide'>
						{names.map((item) => (
							<li
								key={item.id}
								// className={`mb-[32px] ${selectedSort[i] && 'text-100'}`}
							>
								{item.id}
							</li>
						))}
					</ul>
				</ModalLayout>
			)}
		</AnimatePresence>
	);
}

// FIXME: a 태그 속 a 구조가 문제같음.
