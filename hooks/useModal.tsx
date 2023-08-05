import { modalState } from '@/app/status/ModalAtom';
import { useRecoilState } from 'recoil';

type OpenModalType = {
	title: string;
	content: JSX.Element | string;
	callback?: () => any;
};

export const useModal = () => {
	const [modalDataState, setModalDataState] = useRecoilState(modalState);

	const closeModal = () => {
		setModalDataState((prev) => {
			return { ...prev, isOpen: false };
		});
	};

	const openModal = ({ title, content, callback }: OpenModalType) =>
		setModalDataState({ isOpen: true, title, content, callBack: callback });

	return { modalDataState, closeModal, openModal };
};
