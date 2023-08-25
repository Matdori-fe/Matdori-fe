import Header from '@/components/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header title='말랑말랑 교수님' right='roundButton' />
			<div>{children}</div>
		</div>
	);
}
