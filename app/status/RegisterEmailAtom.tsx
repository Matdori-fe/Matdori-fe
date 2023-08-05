import { atom } from 'recoil';

export const RegisterEmailAtom = atom<string>({
	key: 'RegisterEmailAtom',
	default: '',
});
