import { FunctionComponent } from 'react';
import { atom } from 'recoil';

interface Modal {
	id: string;
	Component: FunctionComponent;
}

export const ModalsAtom = atom<Modal[]>({
	key: 'ModalsAtom',
	default: [],
});
