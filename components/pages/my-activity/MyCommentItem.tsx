'use client';

import { deleteAtom } from '@/atoms/delete';
import Text from '@/components/Text/Text';
import { formatDate } from '@/lib/formatDate';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiHeartFill } from 'react-icons/ri';
import { useRecoilState, useRecoilValue } from 'recoil';

interface IMyCommentItem {
	contents: string;
	jokboTitle: string;
	writtenAt: string;
	commentLikes: number;
	jokboId: number;
	commentId: number;
}

export default function MyCommentItem({
	contents,
	jokboTitle,
	writtenAt,
	commentLikes,
	jokboId,
	commentId,
}: IMyCommentItem) {
	const [deleteMode, setDeleteMode] = useRecoilState(deleteAtom);
	const router = useRouter();

	return (
		<div
			onClick={
				deleteMode ? null : () => router.push(`/jokbo/detail/${jokboId}`)
			}
			className='flex flex-col w-full py-[16px] border-b-lightGray border-b-[1px]'
		>
			<Text
				size='sm'
				fontWeight='semibold'
				className={`break-all truncate mb-[8px]  
				${deleteMode && 'w-[calc(100%-30px)]'}
				`}
			>
				{contents}
			</Text>
			<Text size='xs' color='darkGray'>
				{jokboTitle}
			</Text>
			<div className='flex gap-[10px]'>
				<Text size='xxs' color='gray'>
					{formatDate(writtenAt)}
				</Text>
				<div className='flex items-center gap-[4px]'>
					<RiHeartFill className='fill-gray text-xxs' />
					<Text size='xxs' color='gray'>
						{commentLikes}
					</Text>
				</div>
			</div>
		</div>
	);
}
