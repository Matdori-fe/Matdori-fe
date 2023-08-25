import { deleteAtom } from '@/atoms/delete';
import { moveToBack } from '@/utils/page/moveToBack';
import { RiArrowLeftLine, RiCloseFill } from 'react-icons/ri';
import { useRecoilState } from 'recoil';

export default function DeleteModeCancel() {
	const [deleteMode, setDeleteMode] = useRecoilState(deleteAtom);

	return (
		<>
			{deleteMode ? (
				<RiCloseFill size='24' onClick={() => setDeleteMode(!deleteMode)} />
			) : (
				<RiArrowLeftLine onClick={moveToBack} size='24' />
			)}
		</>
	);
}
