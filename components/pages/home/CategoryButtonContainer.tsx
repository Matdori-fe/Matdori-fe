'use client';

import { categoryListAtom } from '@/atoms/home/category';
import RoundButton from '@/components/RoundButton/RoundButton';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

export default function CategoryButtonContainer() {
	const categoryList = useRecoilValue(categoryListAtom);
	const router = useRouter();

	return (
		<div className='flex flex-wrap gap-[7px]'>
			{categoryList.map((name) => (
				<RoundButton
					key={name}
					onClick={() => router.push(`/shop-list/${name}`)}
					label={name}
				/>
			))}
		</div>
	);
}
