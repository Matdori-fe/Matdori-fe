'use client';

import { deleteAtom, deleteListAtom } from '@/atoms/delete';
import { useRecoilValue } from 'recoil';
import Text from '../Text/Text';

export default function HeaderTitle({ title }: { title: string }) {
	const deleteList = useRecoilValue(deleteListAtom);
	const deleteMode = useRecoilValue(deleteAtom);

	return (
		<Text size='lg' fontWeight='bold'>
			{deleteMode ? `총 ${deleteList.size}건` : title}
		</Text>
	);
}
