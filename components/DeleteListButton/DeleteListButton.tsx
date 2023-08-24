'use client';

import { deleteAtom, deleteListAtom } from '@/atoms/delete';
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '../Button/Button';
import { deleteLikeJokboList } from '@/lib/jokbo/deleteLikeJokboList';
import { useDeleteList } from '@/hooks/my-likes/useDeleteList';
import { useQueryClient } from 'react-query';
import Toast from '../Toast/Toast';
import useDeleteListQuery from '@/hooks/useDeleteListQuery';

export default function DeleteListButton() {
	const [deleteMode, setDeleteMode] = useRecoilState(deleteAtom);
	const deleteList = useRecoilValue(deleteListAtom);
	const { resetItems } = useDeleteList();
	const queryClient = useQueryClient();
	const { mutate } = useDeleteListQuery();

	return (
		<>
			{deleteMode && (
				<>
					{deleteList.size === 0 ? (
						<Button label='항목을 선택해주세요' variant='inactive' />
					) : (
						<Button label='삭제하기' variant='active' onClick={mutate} />
					)}
				</>
			)}
		</>
	);
}
