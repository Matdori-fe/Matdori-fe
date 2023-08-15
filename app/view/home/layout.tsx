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
			<Header title='맛도리' left='logo' right={['search']} />
			<div>{children}</div>
		</>
	);
}
