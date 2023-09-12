'use client';

import ModalLayout from './ModalLayout';
import { useModal } from '@/hooks/useModal';
import Text from '../Text/Text';

export default function MoreModal() {
	const { closeModal } = useModal();

	return (
		<ModalLayout variant='small' onClose={() => closeModal('more')}>
			<ul className='flex flex-col items-center w-full overflow-scroll scrollbar-hide'>
				<li
					className={`pb-[32px]`}
					onClick={() => {
						closeModal('more');
						// 여기에 수정 로직 작성
					}}
				>
					<Text fontWeight='semibold'>수정</Text>
				</li>
				<li
					onClick={() => {
						closeModal('more');
						// 여기에 삭제 로직 작성
					}}
				>
					<Text fontWeight='semibold' color='100'>
						삭제
					</Text>
				</li>
			</ul>
			<div className='w-full h-[10px] m-[30px]' />
		</ModalLayout>
	);
}

// FIXME: a 태그 속 a 구조가 문제같음.
