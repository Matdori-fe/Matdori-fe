import ModalContainer from '@/components/ModalContainer/ModalContainer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
export default function NavigationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className='mx-[20px]'>{children}</div>
			<NavigationBar />

			{/* 3. 사용하고자 하는 페이지에 layout에 ModalContainer 삽입. (실제 모달을 띄워주는 컴포넌트) */}
			<ModalContainer />
		</>
	);
}
