import Header from '@/components/Header/Header';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import CarouselSection from '@/components/pages/home/CarouselSection';

export default function NavigationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header title='개인정보 처리방침' left='back' />
			<div className='px-[20px] mb-[100px]'>{children}</div>
		</>
	);
}
