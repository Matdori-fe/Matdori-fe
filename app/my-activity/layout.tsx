import Header from '@/components/Header/Header';
import ModalContainer from '@/components/ModalContainer/ModalContainer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import SelectTab from '@/components/SelectTab/SelectTab';
// import SelectTab from '@/components/SelectTab/SelectTab';
export default function NavigationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header title='내 활동' left='back' right='trashCan' />
			<SelectTab type='sticky' />
			<div className='px-[20px]'>{children}</div>
		</>
	);
}
