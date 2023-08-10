import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const RegisterEmailAtom = atom<string>({
	key: 'RegisterEmailAtom',
	default: '',
});
