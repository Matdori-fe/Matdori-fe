import { atom } from 'recoil';

// FIXME: 회원가입에 필요한 아톰을 하나의 파일로..

interface Password {
	password: string;
	rePassword: string;
}

export const PasswordAtom = atom<Password>({
	key: 'PasswordAtom',
	default: {
		password: '',
		rePassword: '',
	},
});
