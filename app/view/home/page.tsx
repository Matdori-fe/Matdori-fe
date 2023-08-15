'use client';

import HorizonBar from '@/components/HorizonBar/HorizonBar';
import ModalContainer from '@/components/ModalContainer/ModalContainer';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import CarouselSection from '@/components/pages/home/CarouselSection';
import CategorySection from '@/components/pages/home/CategorySection';
import InfiniteShopListSection from '@/components/pages/home/InfiniteShopListSection';
import RecommendButtonsSection from '@/components/pages/home/RecommendButtonsSection';
import axios from 'axios';

export default function Home() {
	// const data = await getServiceRule();

	return (
		<>
			<CarouselSection />

			<CategorySection />

			<RecommendButtonsSection />
			<HorizonBar className='h-[7px]' />
			<InfiniteShopListSection />
		</>
	);
}

// const getServiceRule = async () => {
// 	const result = await fetch(
// 		`${process.env.NEXT_PUBLIC_API}/terms-of-service`,
// 		{ cache: 'no-store' }
// 	);

// 	const data = await result.json();
// 	return data.result;
// };
