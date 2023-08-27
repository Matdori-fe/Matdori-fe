import Image from 'next/image';
import loadingImage from '../../public/loadingModal.svg';
import LoadingBar from '../Loading/Loading';
export default function Loading() {
	return (
		<div className='flex flex-col justify-between h-full pb-[20px] items-center'>
			<LoadingBar />
			<Image src={loadingImage} alt='logo' />
		</div>
	);
}
