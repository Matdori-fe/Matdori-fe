import { atom, atomFamily } from 'recoil';

export const deleteAtom = atom<boolean>({
	key: 'deleteAtom',
	default: false,
});

type DeleteListItem = number | [number, number];

export const deleteListAtom = atom<Set<DeleteListItem>>({
	key: 'deleteListAtom',
	default: new Set(),
});

export const deleteItemAtom = atomFamily<boolean, string>({
	key: 'deleteItemAtom',
	default: (id) =>
		atom<boolean>({
			key: `deleteItemAtom/${id}`,
			default: false,
		}),
});
