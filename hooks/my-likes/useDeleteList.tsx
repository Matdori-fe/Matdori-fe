import { deleteListAtom } from '@/atoms/delete';
import { useRecoilState } from 'recoil';

export const useDeleteList = () => {
	const [deleteList, setDeleteList] = useRecoilState(deleteListAtom);

	const pushItem = (firstId: number, secondId: number | undefined) => {
		// 하나의 id만 있는 경우
		if (secondId === undefined)
			setDeleteList(() => new Set([...deleteList, firstId]));
		// 두개의 id가 있는 경우
		else setDeleteList(() => new Set([...deleteList, [firstId, secondId]]));
	};

	const deleteItem = (firstId: number, secondId: number | undefined) => {
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
	};

	return { pushItem, deleteItem, deleteList };
};
