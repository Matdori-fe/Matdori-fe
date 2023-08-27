import ModalContainer from '@/components/ModalContainer/ModalContainer';
import SearchBarSection from '@/components/pages/search/SearchBarSection';

export default function NavigationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className='px-[20px] mt-[30px]'>
				<SearchBarSection />
				<div className='mb-[16px]' />
				{children}
			</div>
			<ModalContainer />
		</>
	);
}
