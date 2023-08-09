// import { modalState } from '@/app/status/ModalsAtom';
// import { useRecoilState } from 'recoil';

import { ModalsAtom } from '@/app/status/ModalsAtom';
import { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';

// type OpenModalType = {
// 	title: string;
// 	content: JSX.Element | string;
// 	callback?: () => any;
// };

// export const useModal = () => {
// 	const [modalDataState, setModalDataState] = useRecoilState(modalState);

// 	const closeModal = () => {
// 		setModalDataState((prev) => {
// 			return { ...prev, isOpen: false };
// 		});
// 	};

// 	const openModal = ({ title, content, callback }: OpenModalType) =>
// 		setModalDataState({ isOpen: true, title, content, callBack: callback });

// 	return { modalDataState, closeModal, openModal };
// };

export const useModal = () => {
	const [modals, setModals] = useRecoilState(ModalsAtom);

	const openModal = (id: string, Component: FunctionComponent) => {
		setModals((prev) => [...prev, { id, Component }]);
	};

	const closeModal = (id: string) => {
		setModals((prev) => prev.filter((component) => component.id !== id));
	};

	return {
		modals,
		openModal,
		closeModal,
	};
};
