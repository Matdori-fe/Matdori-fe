'use client';

import Image from 'next/image';
import logo from '../../../assets/image/logo.svg';
import Text from '@/components/Text/Text';
import StarRate from '@/components/StarRate/StarRate';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { deleteAtom } from '@/atoms/deleteAtom';
import { useRecoilState } from 'recoil';

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

	return (
		<div
			onClick={
				deleteMode
					? () => setDeleteMode(!deleteMode)
					: () => router.push(`/jokbo/${shopId}?tab=shop&section=info`)
			}
		>
			<img
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
