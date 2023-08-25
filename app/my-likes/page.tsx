import LikeJokboList from '@/components/pages/my-page/LikeJokboList';
import LikeShopList from '@/components/pages/my-page/LikeShopList';

type Props = {
	searchParams: { section: 'shop' | 'jokbo' };
};

export default function MyLikes({ searchParams }: Props) {
	const section = searchParams?.section;

	return (
		<div>
			{section === 'shop' && <LikeShopList />}
			{section === 'jokbo' && <LikeJokboList />}
		</div>
	);
}
