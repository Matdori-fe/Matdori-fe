import Header from '@/components/Header/Header';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import TotalAndSortSection from '@/components/pages/shop-list/TotalAndSortSection';
export default async function NavigationLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { category: string };
}) {
	const response = await getTotalShopCount(params.category);
	//response.result.totalCnt
	return (
		<>
			<TotalAndSortSection category='한식' />
			{children}
		</>
	);
}

// TODO: 총 개수 주는걸로 api바꾸기
const getTotalShopCount = async (category: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API}/stores?cursor=null&category=한식&order=기본순`,
		{ cache: 'no-store' }
	);

	return response.json();
};
