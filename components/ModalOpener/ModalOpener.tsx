'use client';

import { useModal } from '@/hooks/useModal';
import { modals } from '../ModalContainer/ModalContainer';

export default function ModalOpener({
	children,
	type,
}: {
	children: React.ReactNode;
	type: 'shop' | 'department' | 'menu';
}) {
	const { openModal } = useModal();

	return (
		<div onClick={() => openModal({ id: type, Component: modals[type] })}>
			{children}
		</div>
	);
}
