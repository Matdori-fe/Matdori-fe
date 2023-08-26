import Header from '@/components/Header/Header';

export default function HelpLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header title='내 정보 수정하기' left='back' />
			<div className='px-[20px] pt-[16px]'>{children}</div>
		</>
	);
}
