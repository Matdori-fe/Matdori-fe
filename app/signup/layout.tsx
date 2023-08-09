import BorderNotification from '@/components/BorderNotification/BorderNotification';
import Header from '@/components/Header/Header';
import { Metadata } from 'next';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='p-[20px] flex flex-col items-center relative'>
			<Header left='back' title='회원가입' />
			{children}
			<div className='mt-[70px]' />
		</div>
	);
}
