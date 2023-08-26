import { searchAtom } from '@/atoms/search/searchAtom';
import { moveToBack } from '@/utils/page/moveToBack';
import { useRouter } from 'next/navigation';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useSetRecoilState } from 'recoil';

export default function Back() {
	const setSearchString = useSetRecoilState(searchAtom);
	const router = useRouter();

	return (
		<RiArrowLeftLine
			className='mr-[10px] w-[14px]'
			onClick={() => {
				setSearchString('');
				moveToBack();
			}}
		/>
	);
}
