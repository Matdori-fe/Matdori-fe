import HorizonBar from '@/components/HorizonBar/HorizonBar';
import ModalContainer from '@/components/ModalContainer/ModalContainer';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import CarouselSection from '@/components/pages/home/CarouselSection';
import CategorySection from '@/components/pages/home/CategorySection';
import InfiniteShopListSection from '@/components/pages/home/InfiniteShopListSection';
import RecommendButtonsSection from '@/components/pages/home/RecommendButtonsSection';
import Top3Section from '@/components/pages/home/Top3Section';
import axios from 'axios';

export default function Home() {
	return (
		<div className='flex flex-col gap-[30px]'>
			<CarouselSection />
			<RecommendButtonsSection />
			<CategorySection />
			<Top3Section />
			<InfiniteShopListSection />
		</div>
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
