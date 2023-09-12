'use client';

/* eslint-disable */

import Image from 'next/image';
import logo from '../../../assets/image/logo.svg';
import Text from '@/components/Text/Text';
import StarRate from '@/components/StarRate/StarRate';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { deleteAtom } from '@/atoms/delete';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ErrorImg from '@/components/ErrorImg/ErrorImg';

export default function ShopItem({
	shopId,
	name,
	score,
	jokboCnt,
	img,
	category,
}: {
	shopId: number;
	name: string;
	score: number;
	jokboCnt: number;
	img: string;
	category: string;
}) {
	const router = useRouter();
	const [deleteMode, setDeleteMode] = useRecoilState(deleteAtom);

	const searchParams = useSearchParams();
	const writeStore: string = searchParams.get('writeStore') || 'undefined';

	const onClick = () => {
		if (!deleteMode) {
			let moveUrl =
				writeStore === 'true'
					? `/write/${shopId}`
					: `/store/${shopId}/?tab=shop&section=info`;
			// 족보 쓰기에 경우 뒤로가기 시를 위해 라우팅 스택을 하나 버림
			if (writeStore === 'true') {
				router.back();
				setTimeout(() => {
					console.log('페이지 이동 실행');
					router.replace(moveUrl);
				}, 10);
			} else {
				router.replace(moveUrl);
			}
		}
	};

	let moveUrl =
		writeStore === 'true'
			? `/write/${shopId}`
			: `/store/${shopId}/?tab=shop&section=info`;

	return (
		<div onClick={onClick}>
			<img
				onError={ErrorImg}
				src={img}
				className='w-full h-[100px] object-contain rounded-basic border border-solid border-lightGray'
			/>
			<div className='px-[5px] w-full pt-[6px]'>
				<div className='flex justify-between'>
					<Text
						size='sm'
						fontWeight='semibold'
						className='overflow-hidden whitespace-nowrap overflow-ellipsis'
					>
						{name}
					</Text>
					<JokboInfo kind='starScore' count={score} />
				</div>
				<div className='flex justify-between'>
					<Text size='xxs' color='darkGray'>
						{category}
					</Text>
					<JokboInfo kind='bookMark' count={jokboCnt} />
				</div>
			</div>
		</div>
	);
}

// TODO: 클릭하면 가게 페이지로 이동
