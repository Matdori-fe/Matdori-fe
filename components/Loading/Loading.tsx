import Image from 'next/image';
import loading from '../../public/loading.gif';

export default function Loading() {
	return (
		<div className='flex justify-center w-full'>
			<Image src={loading} alt='loading' height='50' width='50' />
		</div>
	);
}
