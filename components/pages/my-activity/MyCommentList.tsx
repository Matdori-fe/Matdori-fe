'use client';

import JokboBox from '@/app/jokbo/[storeIndex]/component/JokboBox';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import Loading from '@/components/Loading/Loading';
import PageNotification from '@/components/PageNotification/PageNotification';
import ShopItem from '@/components/pages/shop-list/ShopItem';
import {
	deleteLikeJokbo,
	useDelete,
	useDeleteLikeJokbo,
	useTest,
} from '@/hooks/my-likes/useDelete';
import { useFetcher } from '@/hooks/my-likes/useFetcher';
import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import MyCommentItem from './MyCommentItem';
import { deleteMyComment } from '@/lib/jokbo/deleteMyComment';
import ErrorPpok from '@/components/Error/ErrorPpok';
import Link from 'next/link';

export default function MyCommentList() {
	const userIndex = JSON.parse(localStorage.getItem('recoil-persist')).user
		.userId;

	// REFACTOR: 함수 분리
	const getMyCommentList = ({ pageParam = null }) =>
		axios
			.get(`${process.env.NEXT_PUBLIC_API}/users/${userIndex}/comments`, {
				params: {
					cursor: pageParam,
				},
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				return res?.data.result;
			});

	let bottom = useRef(null);

	const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery(
		// 밑줄인 키가 없으면 사이드 이펙트 발생
		// REFACTOR: 쿼리키 수정
		['mycomment'],
		getMyCommentList,
		{
			getNextPageParam: ({ hasNext, comments }) => {
				if (!hasNext) return undefined;

				const finalJokboId = comments[comments.length - 1].jokboId;
				return finalJokboId;
				// cur는 현재 페이지
				// if (Math.round(totalCnt / 15) === cur) return false;

				// undefined를 반환하면 데이터 호출이 멈춰진다.
			},
			// keepPreviousData: true,
		}
	);

	const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage();

	useObserver({
		target: bottom,
		onIntersect,
	});

	console.log(data);

	const DeletableItem = useDelete({
		query: deleteMyComment,
		queryKey: ['mycomment'],
	});

	// TODO: Delete 버튼 위치 이동

	return (
		<div className='mt-[110px]'>
			{status === 'loading' && <Loading />}
			{status === 'error' && <ErrorPpok />}
			{status === 'success' && data?.pages[0].comments.length === 0 && (
				<PageNotification
					label={`작성한 댓글이 없어요.\n족보에 댓글을 작성해보세요.`}
				/>
			)}
			<div className='grid grid-cols-1'>
				{status === 'success' &&
					data.pages.map((group) => (
						<>
							{group.comments.map((shop) => (
								<DeletableItem
									deleteBtnPosition='comment'
									key={shop.jokboId}
									secondId={shop.commentId}
									itemId={shop.jokboId}
								>
									<MyCommentItem
										commentId={shop.commentId}
										contents={shop.contents}
										jokboId={shop.jokboId}
										writtenAt={shop.writtenAt}
										jokboTitle={shop.title}
										commentLikes={shop.favoriteCnt}
									/>
								</DeletableItem>
							))}
						</>
					))}
			</div>
			<div ref={bottom} />
			{/* {hasNextPage ? <div ref={bottom}></div> : <p>끝</p>} */}
			{isFetchingNextPage && <Loading />}

			<div className='mt-[60px]' />
		</div>
	);
}
