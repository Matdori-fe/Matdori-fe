'use client';
import { RiQuestionLine, RiArrowRightLine } from 'react-icons/ri';
import { QnaType } from '../Qna_Type/QnaType';
import Text from '@/components/Text/Text';
import Link from 'next/link';
const QnaTitleBox = ({ qnaIndex, title, content }: QnaType) => {
	return (
		<div className='flex justify-between mx-2 py-4 border-b-[1px] border-lightGray'>
			<div className='flex w-10/12 ml-1'>
				<RiQuestionLine className='text-80 text-[16px] mt-[3px] mr-2' />
				<div className='w-full'>
					<Text fontWeight='semibold' color='black' size='sm'>
						{title}
					</Text>
				</div>
			</div>
			<Link href={`/qna/${qnaIndex}`}>
				<RiArrowRightLine className='text-black text-[16px] mt-[3px] mr-1' />
			</Link>
		</div>
	);
};

export default QnaTitleBox;
