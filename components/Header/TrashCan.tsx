'use client';

import { deleteAtom } from '@/atoms/deleteAtom';
import { FiTrash2 } from 'react-icons/fi';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function TrashCan() {
	const [deleteState, setDeleteAtom] = useRecoilState(deleteAtom);

	return (
		<FiTrash2
			size='20'
			className='text-100'
			onClick={() => setDeleteAtom(!deleteState)}
		/>
	);
}
