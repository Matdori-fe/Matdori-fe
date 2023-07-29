'use client';

import { AnimatePresence } from 'framer-motion';
import ModalLayout from './Modal';
import { SortListAtom } from '@/app/status/sortAtom';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SortModal({ showModal }: { showModal: boolean }) {
	const sortList = useRecoilValue(SortListAtom);

	useEffect(() => {
		const scroll = parseInt(sessionStorage.getItem('modal')); // 오류 무시 ㄱㄱ

		if (showModal) {
			document.body.classList.add(`overflow-y-hidden`);
			window.scrollTo(0, scroll);
		} else {
			window.scrollTo(0, scroll);
			document.body.classList.remove('overflow-y-hidden');
		}
	}, []);

	return (
		<AnimatePresence>
			{showModal && (
				<ModalLayout title='정렬' href='/'>
					<ul className='flex-col w-full'>
						{sortList.map((sortType) => (
							<Link href='/' key={sortType}>
								<li className='mb-[32px]'>{sortType}</li>
							</Link>
						))}
					</ul>
				</ModalLayout>
			)}
		</AnimatePresence>
	);
}
