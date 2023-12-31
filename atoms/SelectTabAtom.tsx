import { atom, atomFamily } from 'recoil';

const selectList = {
	shop: [
		{ id: 'info', name: '정보' },
		{ id: 'menu', name: '메뉴' },
		{ id: 'jokbo', name: '족보' },
	],
	activity: [
		{ id: 'myjokbo', name: '내 족보' },
		{ id: 'mycomment', name: '내 댓글' },
	],
	likes: [
		{ id: 'shop', name: '좋아요한 가게' },
		{ id: 'jokbo', name: '좋아요한 족보' },
	],
};

export type SelectTabVariant = 'shop' | 'activity' | 'likes';

export const SelectTabAtom = atomFamily<any[], SelectTabVariant>({
	key: 'SelectTabAtom',
	default: (variant) => selectList[variant],
});
