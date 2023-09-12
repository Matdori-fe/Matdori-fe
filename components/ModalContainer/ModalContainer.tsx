'use client';

import { FunctionComponent } from 'react';
import DepartmentModal from '../Modal/DepartmentModal';
import MenuModal from '../Modal/MenuModal';
import ShopModal from '../Modal/ShopModal';
import SortModal from '../Modal/SortModal';
import { AnimatePresence } from 'framer-motion';
import { useModal } from '@/hooks/useModal';
import MoreModal from '../Modal/MoreModal';

interface Modals {
	[key: string]: FunctionComponent;
}
export const modals: Modals = {
	sort: SortModal,
	department: DepartmentModal,
	menu: MenuModal,
	shop: ShopModal,
	more: MoreModal,
};

export default function ModalContainer() {
	const { modals } = useModal();

	// NOTE: 태그 안에 변수를 넣어 분기시키는 것이 불가능하므로 사용하고자하는 모달을 사용자 쪽에서 부르도록함
	return (
		<>
			<AnimatePresence>
				{modals.map((Modal: any) => (
					<Modal.Component key={Modal.id} />
				))}
			</AnimatePresence>
		</>
	);
}
