'use client';

import { deleteAtom } from '@/atoms/delete';
import { FiTrash2 } from 'react-icons/fi';
import { RiCheckFill } from 'react-icons/ri';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function TrashCan() {
	const [deleteMode, setDeleteMode] = useRecoilState(deleteAtom);

	return (
		<>
			{!deleteMode && (
				<FiTrash2
					size='20'
					className='text-100'
					onClick={() => setDeleteMode(true)}
				/>
			)}
		</>
	);
}
