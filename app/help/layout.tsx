import Header from '@/components/Header/Header';

export default function HelpLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='px-[20px]'>
			<Header title='비밀번호 변경하기' left='back' />
			{children}
		</div>
	);
}
