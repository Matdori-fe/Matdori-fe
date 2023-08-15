'use client';

import { useRecoilValue } from 'recoil';
import { DepartmentAtom } from '@/atoms/DepartmentAtom';
import { useModal } from '@/hooks/useModal';
import { modals } from '../ModalContainer/ModalContainer';
import Input from '../Input/Input';

export default function DepartmentModalOpener() {
	const department = useRecoilValue(DepartmentAtom);
	const { openModal } = useModal();

	return (
		<Input
			readonly={true}
			placeHolder='전공을 선택해주세요.'
			inputSize='small'
			value={department}
			onClick={() =>
				openModal({ id: 'department', Component: modals.department })
			}
			inputmode='none'
		/>
	);
}
