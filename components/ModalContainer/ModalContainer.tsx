import { FunctionComponent } from 'react';
import DepartmentModal from '../Modal/DepartmentModal';
import MenuModal from '../Modal/MenuModal';
import ShopModal from '../Modal/ShopModal';
import SortModal from '../Modal/SortModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ModalsAtom } from '@/app/status/ModalsAtom';
import { AnimatePresence } from 'framer-motion';

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
	const modals = useRecoilValue(ModalsAtom);

	return (
		<>
			<AnimatePresence>
				{modals.map((modal) => (
					<modal.Component key={modal.id} />
				))}
			</AnimatePresence>
		</>
	);
}
