import MyCommentList from '@/components/pages/my-activity/MyCommentList';
import MyJokboList from '@/components/pages/my-activity/MyJokboList';
import LikeJokboList from '@/components/pages/my-page/LikeJokboList';
import LikeShopList from '@/components/pages/my-page/LikeShopList';
import { instance as axios } from '@/lib/axios';
import { getTermsOfService } from '@/lib/noti/getTermsOfService';
import { useEffect } from 'react';

type Props = {
	searchParams: { section: 'shop' | 'jokbo' };
};

export default function MyLikes({ searchParams }: Props) {
	const section = searchParams?.section;

	return (
		<div>
			{section === 'myjokbo' && <MyJokboList />}
			{section === 'mycomment' && <MyCommentList />}
		</div>
	);
}
