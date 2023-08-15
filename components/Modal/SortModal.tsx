'use client';
import { AnimatePresence } from 'framer-motion';
import ModalLayout from './ModalLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/useModal';
import { SelectedSortAtom, SortListAtom } from '@/atoms/sortAtom';

export default function SortModal() {
	const router = useRouter();
	const sortList = useRecoilValue(SortListAtom);
	const [selectedSort, setSelectedSort] = useRecoilState(SelectedSortAtom);
	const { closeModal } = useModal();

	// FIXME: 리펙토링. 하나의 관리하는 모듈을 만드는 것이 좋을 듯
	const handleSelectSort = (i: number): boolean[] => {
		const falseArr = new Array(4).fill(false);
		falseArr[i] = true;

		return falseArr;
	};

	// TODO: 선택된 정렬을 서버로 보내서 데이터를 받아오는 로직이 필요
	return (
		<ModalLayout title='정렬' onClose={() => closeModal('sort')}>
			<ul className='flex-col w-full'>
				{sortList.map((sortType, i) => (
					<li
						key={sortType}
						className={`mb-[32px] ${selectedSort[i] && 'text-100'}`}
						onClick={() => {
							setSelectedSort(() => handleSelectSort(i));
							closeModal('sort');
						}}
					>
						{sortType}
					</li>
				))}
			</ul>
		</ModalLayout>
	);
}

// FIXME: a 태그 속 a 구조가 문제같음.
