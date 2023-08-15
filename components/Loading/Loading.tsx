import Image from 'next/image';
import loading from '../../public/loading.gif';

export default function Loading() {
	return (
		<div className='flex justify-center w-full h-[50px] items-center'>
			<Image src={loading} alt='loading' height='50' width='50' />
		</div>
	);
}
