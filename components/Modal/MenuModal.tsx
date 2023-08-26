'use client';

import { motion } from 'framer-motion';
import ModalLayout from './ModalLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import logo from '../../assets/image/logo.svg';
import Image from 'next/image';
import Text from '../Text/Text';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import JokboInfo from '../JokboInfo/JokboInfo';
import BorderNotification from '../BorderNotification/BorderNotification';
import Loading from './Loading';
import { useModal } from '@/hooks/useModal';
import {
	RecommendedMenuList,
	getRecommendedMenuList,
} from '@/lib/shop/getRecommendedMenu';
import { useFetcher } from '@/hooks/useFetcher';

export default function MenuModal() {
	const router = useRouter();
	const imageArr = new Array(3).fill(true);
	const [loading, setLoading] = useState(true);
	const { closeModal } = useModal();
	const { data, Wrapper, refetch } = useFetcher<RecommendedMenuList>(
		getRecommendedMenuList
	);

	useEffect(() => {
		if (loading) {
			// 다시 추천 받기
			refetch();

			// 약간의 시간 주기
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	}, [loading]);

	const func = () => {
		setLoading(true);
	};

	const BoxAnimation = {
		start: { opacity: 0.5 },
		end: {
			opacity: 1,
			transition: {
				duration: 3,
				type: 'spring',
				stiffness: 110,
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const InnerAnimation = {
		start: { opacity: 0, y: 10 },
		end: { opacity: 1, y: 0 },
	};

	// TODO: 선택된 정렬을 서버로 보내서 데이터를 받아오는 로직이 필요
	return (
		<ModalLayout
			title={loading ? '맛도리가 메뉴를 찾고 있어요' : '맛도리가 추천하는 메뉴'}
			onClose={() => closeModal('menu')}
			variant={loading ? 'normal' : 'large'}
		>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className='sm:w-[calc(412px-40px)] w-full'>
						<motion.div
							initial='start'
							animate='end'
							variants={BoxAnimation}
							className='flex flex-col justify-between w-full gap-[17px]'
						>
							<Wrapper>
								{data &&
									data.result.map((menu) => (
										// TODO: 이미지 누르면 가게페이지로 이동
										<motion.div
											variants={InnerAnimation}
											key='1'
											className='flex flex-row [&>img]:h-[75px]'
											onClick={() =>
												router.push(
													`/store/${menu.storeId}/?tab=shop&section=menu`
												)
											}
										>
											<Image
												src={menu.imgUrl}
												width='75'
												height='75'
												alt='logo'
												className='rounded-basic'
											/>
											<div className='p-[12px] px-[17px] flex flex-col gap-[8px]'>
												<Text color='100' size='sm' fontWeight='semibold'>
													{menu.menuName}
												</Text>
												<div className='flex justify-between f-full'>
													<Text
														fontWeight='normal'
														size='sm'
														className='mr-[10px]'
													>
														{menu.storeName}
													</Text>
													<JokboInfo
														kind='starScore'
														count={menu.totalRating.toFixed(1)}
													/>
												</div>
											</div>
										</motion.div>
									))}
							</Wrapper>
						</motion.div>
						<div className='mb-[20px]' />
						<BorderNotification
							modal
							label='※ 맛도리 추천 메뉴는 별점과 무관하게 랜덤으로 추천됩니다.'
						/>
					</div>
					<Button
						modal
						label='다시 추천받기'
						variant='active'
						onClick={() => func()}
					/>
				</>
			)}
		</ModalLayout>
	);
}

// FIXME: a 태그 속 a 구조가 문제같음.
// FIXME: 모달의 타이틀이나 그런거 ㄹ따로 관리하는게 좋지 않을까?
