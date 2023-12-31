import { atom, atomFamily, selector } from 'recoil';

export const deleteAtom = atom<boolean>({
	key: 'deleteAtom',
	default: false,
});

export const deleteListAtom = atom<Set<number>>({
	key: 'deleteListAtom',
	default: new Set(),
});

export const checkedItemAtom = atomFamily<boolean, string>({
	key: 'checkedItemAtom',
	default: (id) =>
		atom<boolean>({
			key: `checkedItemAtom/${id}`,
			default: false,
		}),
});

export const checkedListAtom = atom<number[]>({
	key: 'checkedListAtom',
	default: [],
});
