'use client';

import MyCommentList from '@/components/pages/my-activity/MyCommentList';
import MyJokboList from '@/components/pages/my-activity/MyJokboList';
import LikeJokboList from '@/components/pages/my-page/LikeJokboList';
import LikeShopList from '@/components/pages/my-page/LikeShopList';

type Props = {
	searchParams: { section: 'myjokbo' | 'mycomment' };
};

export default function MyArticles({ searchParams }: Props) {
	const section = searchParams?.section;

	return (
		<div>
			{section === 'myjokbo' && <MyJokboList />}
			{section === 'mycomment' && <MyCommentList />}
		</div>
	);
}
