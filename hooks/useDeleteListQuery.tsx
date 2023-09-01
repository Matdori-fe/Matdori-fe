import { deleteAtom, deleteListAtom } from '@/atoms/delete';
import { IParams, Section, Tab } from '@/const/params';
import { deleteLikeJokboList } from '@/lib/jokbo/deleteLikeJokboList';
import { deleteLikeShopList } from '@/lib/shop/deleteLikeShopList';
import { useSearchParams } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteMyJokboList } from '@/lib/jokbo/deleteMyJokboList';
import { deleteMyCommentList } from '@/lib/comment/deleteMyCommentList';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDeleteList } from './my-likes/useDeleteList';
import Toast from '@/components/Toast/Toast';
import { deletable } from '@/const/deletable';

type DeleteFn = (list: Set<number | [number, number]>) => Promise<void>;
type Likes = 'shop' | 'jokbo';
type Activity = 'myjokbo' | 'mycomment';

export default function useDeleteListQuery() {
	const setDeleteMode = useSetRecoilState(deleteAtom);
	const params = useSearchParams();
	const tab = params.get('tab') as 'likes' | 'activity'; // url tab
	const section = params.get('section') as
		| 'shop'
		| 'jokbo'
		| 'myjokbo'
		| 'mycomment';

	const deleteList = useRecoilValue(deleteListAtom);
	const { resetItems } = useDeleteList();
	const deleteFn = callApiByType({ tab, section }) as DeleteFunction;
	const queryClient = useQueryClient();

	const { isLoading, error, data, mutate } = useMutation(
		() => deleteFn(deleteList),
		{
			onSuccess: () => {
				Toast(`${deleteList.size}개의 항목이 삭제되었습니다.`);
				queryClient.invalidateQueries(section);

				deletable.activity.mycomment;
				setDeleteMode(false);
				resetItems();
			},
		}
	);

	return { mutate };
}

type DeleteFunction = (list: Set<number>) => Promise<void>;

const callApiByType = ({
	tab,
	section,
}: {
	tab: Tab;
	section: Section;
}): DeleteFunction | undefined => {
	if (tab === 'likes') {
		if (section === 'shop') return deleteLikeShopList;
		if (section === 'jokbo') return deleteLikeJokboList;
	}

	if (tab === 'activity') {
		if (section === 'myjokbo') return deleteMyJokboList;
		if (section === 'mycomment') return deleteMyCommentList;
	}
};
