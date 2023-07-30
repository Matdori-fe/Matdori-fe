'use client';

import { AnimatePresence } from 'framer-motion';
import ModalLayout from './ModalLayout';
import { SelectedSortAtom, SortListAtom } from '@/app/status/sortAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import logo from '../../assets/image/logo.svg';
import Image from 'next/image';
import Text from '../Text/Text';
import Button from '../Button/Button';
import BorderNotification from '../BorderNotification/BorderNotification';
import { useEffect, useState } from 'react';

export default function ShopModal({
	showModal,
	href,
}: {
	showModal: boolean;
	href: string;
}) {
	const router = useRouter();

	const imageArr = new Array(3).fill(true);

	const [loading, setLoading] = useState(true);

	// TODO: 가게 3초 찾기. 컴포넌트가 새로 만들어지지 않는 것 같음. 그래서 useEffect가 의도대로 동작하지 않는다.
	useEffect(() => {
		if (showModal) setTimeout(() => setLoading(false), 3000);
	}, []);

	// TODO: 선택된 정렬을 서버로 보내서 데이터를 받아오는 로직이 필요
	return (
		<AnimatePresence>
			{showModal && (
				<ModalLayout title='맛도리가 추천하는 가게' href={href}>
					<div>{loading ? 'loading' : 'on'}</div>

					<div className='sm:w-[calc(412px-40px)] w-full'>
						<div className='flex justify-between w-full'>
							{imageArr.map((_) => (
								// TODO: 이미지 누르면 가게페이지로 이동
								<div key='1'>
									<Image
										src={logo}
										height='100'
										alt='logo'
										className='rounded-basic'
									/>
									<div className='flex f-full justify-between p-[6px]'>
										<Text fontWeight='semibold'>가메이</Text>
										<Text>⭐️ 4.8</Text>
									</div>
								</div>
							))}
						</div>
						<div className='mb-[20px]' />
						<BorderNotification label='* 맛도리 추천 가게는 별점과 무관하게 랜덤으로 추천됩니다.' />
					</div>
					<Button
						modal
						label='다시 추천받기'
						variant='active'
						href='/?modal=true'
					/>
				</ModalLayout>
			)}
		</AnimatePresence>
	);
}

// FIXME: a 태그 속 a 구조가 문제같음.
// FIXME: 모달의 타이틀이나 그런거 ㄹ따로 관리하는게 좋지 않을까?
