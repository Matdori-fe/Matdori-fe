import { useRecoilValue } from 'recoil';
import Input from '../Input/Input';
import { DepartmentAtom } from '@/app/status/DepartmentAtom';
import { useModal } from '@/hooks/useModal';
import { modals } from '../ModalContainer/ModalContainer';

export default function DepartmentModalOpener() {
	const department = useRecoilValue(DepartmentAtom);
	const { openModal } = useModal();

	return (
		<Input
			placeHolder='전공을 선택해주세요.'
			inputSize='small'
			value={department}
			onClick={() => openModal('department', modals.department)}
			inputmode='none'
		/>
	);
}
