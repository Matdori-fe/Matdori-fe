'use client';

import Button from '@/components/Button/Button';
import Margin from '@/components/Margin/Margin';
import Text from '@/components/Text/Text';
import { RecoilRoot } from 'recoil';

const Home = () => {
	return (
		<RecoilRoot>
			<div className='w-100 bg-100'>ss</div>
			<div className='w-100 bg-100'>ss</div>
			<div className='w-100 bg-80'>ss</div>
			<div className='w-100 bg-30'>ss</div>
			{/* <div className='w-100 bg-blue'>ss</div> */}
			<Margin height={10} />
			<Text size='xxs' color='30'>
				hi
			</Text>
			<Button
				name={'Hello Tailwind CSS'}
				className={'bg-teal-400 text-white'}
			/>
		</RecoilRoot>
	);
};

export default Home;
