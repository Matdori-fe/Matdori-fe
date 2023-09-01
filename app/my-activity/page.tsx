import MyCommentList from '@/components/pages/my-activity/MyCommentList';
import MyJokboList from '@/components/pages/my-activity/MyJokboList';

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
