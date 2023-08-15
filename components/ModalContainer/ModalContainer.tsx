'use client';

import { FunctionComponent } from 'react';
import DepartmentModal from '../Modal/DepartmentModal';
import MenuModal from '../Modal/MenuModal';
import ShopModal from '../Modal/ShopModal';
import SortModal from '../Modal/SortModal';
import { AnimatePresence } from 'framer-motion';
import { useModal } from '@/hooks/useModal';

interface Modals {
	[key: string]: FunctionComponent;
}
export const modals: Modals = {
	sort: SortModal,
	department: DepartmentModal,
	menu: MenuModal,
	shop: ShopModal,
};

export default function ModalContainer() {
	const { modals } = useModal();

	return (
		<>
			<AnimatePresence>
				{modals.map((Modal) => (
					<Modal.Component key={Modal.id} />
				))}
			</AnimatePresence>
		</>
	);
}
