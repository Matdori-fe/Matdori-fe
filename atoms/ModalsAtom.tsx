import { FunctionComponent } from 'react';
import { atom } from 'recoil';

export interface Modal {
	id: 'department' | 'shop' | 'menu';
	Component: FunctionComponent;
}

export const ModalsAtom = atom<Modal[]>({
	key: 'ModalsAtom',
	default: [],
});
