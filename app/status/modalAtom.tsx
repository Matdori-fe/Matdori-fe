import { DefaultValue, atom, atomFamily, selectorFamily } from 'recoil';

// FIXME: atomFamily 사용

// export const recommendShopModalState = atom<boolean>({
// 	key: 'recommendShopModal',
// 	default: false,
// });

// type ModalType = {
// 	isOpen: boolean;
// 	title: string;
// 	content: JSX.Element | string;
// 	callBack?: () => any;
// };

// export const modalState = atom<ModalType>({
// 	key: 'modalState',
// 	default: {
// 		isOpen: false,
// 		title: '',
// 		content: '',
// 	},
// });

// type ModalId = string;

// interface ModalInfo {
// 	id: ModalId;
// 	isOpen: boolean;
// 	title: string;
// }

// export const modalsAtomFamily = atomFamily<ModalInfo, ModalId>({
// 	key: 'modalsAtomFamily',
// 	default: (id) => ({ id, isOpen: false, title: '' }),
// });

// export const modalIdsAtom = atom<ModalId[]>({
// 	key: 'modalIdsAtom',
// 	default: [],
// });

// export const modalsSelectorFamily = selectorFamily<ModalInfo, ModalId>({
// 	key: 'modalsSelectorFamily',

// 	get:
// 		(modalId) =>
// 		({ get }) =>
// 			get(modalsAtomFamily(modalId)),

// 	set:
// 		(modalId) =>
// 		({ get, set, reset }, modalInfo) => {
// 			if (modalInfo instanceof DefaultValue) {
// 				reset(modalsAtomFamily(modalId));
// 				set(modalIdsAtom, (prevValue) =>
// 					prevValue.filter((item) => item !== modalId)
// 				);

// 				return;
// 			}

// 			set(modalsAtomFamily(modalId), modalInfo);
// 			set(modalIdsAtom, (prev) => Array.from(new Set([...prev, modalInfo.id])));
// 		},
// });
