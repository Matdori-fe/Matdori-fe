import ModalContainer from '@/components/ModalContainer/ModalContainer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
export default function NavigationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className='px-[20px]'>{children}</div>
			<NavigationBar />
			<ModalContainer />
		</>
	);
}
