import { checkedListAtom, deleteAtom, deleteListAtom } from '@/atoms/delete';
import setHasArr from '@/lib/setHasArr';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export const useDeleteList = () => {
	const [deleteList, setDeleteList] = useRecoilState(deleteListAtom);
	const [checkedList, setCheckedList] = useRecoilState(checkedListAtom);
	const deleteMode = useRecoilValue(deleteAtom);

	const pushItem = (firstId: number, secondId?: number | undefined) => {
		// 하나의 id만 있는 경우
		// if (secondId === undefined)
		setDeleteList(() => new Set([...deleteList, firstId]));
		// // 두개의 id가 있는 경우
		// else setDeleteList(() => new Set([...deleteList, [firstId, secondId]]));

		setCheckedList([...checkedList, firstId]);
	};

	const deleteItem = (firstId: number, secondId?: number | undefined) => {
		const prev = new Set([...deleteList]); // 리스트 복사

		// 하나의 id만 있는 경우
		if (secondId === undefined) {
			// 입력으로 들어온 id 아이템 삭제
			prev.forEach((item) => {
				if (JSON.stringify(item) === JSON.stringify(firstId)) {
					prev.delete(item);
				}
			});

			setDeleteList(new Set([...prev]));
		}

		// 두개의 id가 있는 경우
		else {
			// 입력으로 들어온 id 아이템 삭제
			prev.forEach((item) => {
				if (JSON.stringify(item) === JSON.stringify([firstId, secondId])) {
					prev.delete(item);
				}
			});

			setDeleteList(new Set([...prev]));
		}

		// TODO: 여기에 체크리스트에서 제거하는 로직 필요(배열 delete)
	};

	const handleItem = (firstId: number, secondId: number | undefined) => {
		if (secondId === undefined) {
			if (deleteList.has(firstId)) deleteItem(firstId);
			else pushItem(firstId);
		} else {
			if (
				setHasArr({
					set: deleteList,
					key: [firstId, secondId],
				})
			)
				deleteItem(firstId, secondId);
			else pushItem(firstId, secondId);
		}
	};

	const resetItems = () => {
		setDeleteList(new Set());
	};

	useEffect(() => {
		if (!deleteMode && deleteList.size !== 0) resetItems();
	}, [deleteMode]);

	return { handleItem, resetItems };
};
