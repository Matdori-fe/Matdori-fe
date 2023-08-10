import { atom } from 'recoil';

export const DepartmentAtom = atom<string>({
	key: 'DepartmentAtom',
	default: '',
});
