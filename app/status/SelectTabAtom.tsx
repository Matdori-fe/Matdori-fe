import { atom, atomFamily } from 'recoil';

const selectList = {
	jokbo: ['정보', '메뉴', '족보'],
	myPage: ['내 게시글', '내 댓글'],
	likes: ['좋아요한 가게', '좋아요힌 족보'],
};

interface SelectTabType {
	variant: string;
	selected: string;
	lists: string[];
}

export type SelectTabVariant = 'jokbo' | 'myPage' | 'likes';

export const SelectTabAtom = atomFamily<SelectTabType, SelectTabVariant>({
	key: 'SelectTabAtom',
	default: (variant) => {
		return {
			variant,
			selected: selectList[variant][0],
			lists: selectList[variant],
		};
	},
});
