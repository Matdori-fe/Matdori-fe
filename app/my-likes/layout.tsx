import Header from '@/components/Header/Header';
import ModalContainer from '@/components/ModalContainer/ModalContainer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import SelectTab from '@/components/SelectTab/SelectTab';
// import SelectTab from '@/components/SelectTab/SelectTab';
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header title='내가 한 좋아요' left='back' right='trashCan' />
			<SelectTab type='sticky' />
			<div className='px-[20px]'>{children}</div>
		</>
	);
}
