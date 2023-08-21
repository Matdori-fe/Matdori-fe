'use client';

import JokboBox from '@/app/jokbo/[storeIndex]/component/JokboBox';
import { deleteAtom } from '@/atoms/deleteAtom';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import ErrorPpok from '@/components/Error/ErrorPpok';
import ErrorPPok from '@/components/Error/ErrorPpok';
import Loading from '@/components/Loading/Loading';
import PageNotification from '@/components/PageNotification/PageNotification';
import ShopItem from '@/components/pages/shop-list/ShopItem';
import { deleteMyJokbo } from '@/hooks/my-activity/delete';
import {
	deleteLikeJokbo,
	deleteLikeShop,
	useDelete,
} from '@/hooks/my-likes/useDelete';

import { useFetcher } from '@/hooks/my-likes/useFetcher';
import { useObserver } from '@/hooks/useObserver';
import { deleteMyComment } from '@/lib/jokbo/deleteMyComment';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';

// FIXME: +swif
export default function MyJokboList() {
	const queryClient = useQueryClient();

	const userIndex = JSON.parse(localStorage.getItem('recoil-persist')).user
		.userId;

	const getMyJokboList = ({ pageParam = null }) =>
		axios
			.get(`${process.env.NEXT_PUBLIC_API}/users/${userIndex}/jokbos`, {
				params: {
					cursor: pageParam,
				},
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				return res?.data.result;
			});

	// const getShopList = ({ pageParam = null }) =>
	// 	axios
	// 		.get(`${process.env.NEXT_PUBLIC_API}/stores`, {
	// 			params: {
	// 				cursor: pageParam,
	// 				category: '한식',
	// 				order: sort,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			return res?.data.result;
	// 		});

	let bottom = useRef(null);

	const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery(
		// 밑줄인 키가 없으면 사이드 이펙트 발생
		// REFACTOR: 쿼리키 수정
		['myjokbo'],
		getMyJokboList,
		{
			getNextPageParam: ({ hasNext, jokbos }) => {
				if (!hasNext) return undefined;

				const finalJokboId = jokbos[jokbos.length - 1].jokboId;
				return finalJokboId;
				// cur는 현재 페이지
				// if (Math.round(totalCnt / 15) === cur) return false;

				// undefined를 반환하면 데이터 호출이 멈춰진다.
			},
			// keepPreviousData: true, // 새 데이터를 요청해 갈아끼우기 직전까지 이전 데이터 유지
		}
	);

	const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage();

	useObserver({
		target: bottom,
		onIntersect,
	});

	const DeletableItem = useDelete({
		query: deleteMyJokbo,
		queryKey: ['myjokbo'],
	});

	console.log(data);

	const [deleteMode, setDeleteMode] = useRecoilState(deleteAtom);
	const router = useRouter();

	return (
		<div className='mt-[110px]'>
			{status === 'loading' && <Loading />}
			{status === 'error' && <ErrorPpok />}
			{status === 'success' && data?.pages[0].jokbos.length === 0 && (
				<PageNotification
					label={`작성한 족보가 없어요.\n족보를 작성하러 가볼까요?`}
				/>
			)}
			<div className='grid grid-cols-1 gap-4 '>
				{status === 'success' &&
					data.pages.map((group, i) => (
						<>
							{group.jokbos.map((shop) => (
								<>
									<DeletableItem
										deleteBtnPosition='jokbo'
										itemId={shop.jokboId}
										key={shop.jokboId}
									>
										<div
											onClick={
												deleteMode
													? () => setDeleteMode(!deleteMode)
													: () => router.push('')
												// TODO: 여기에 족보로 이동하는 링크 추가
											}
										>
											<JokboBox
												contents={shop.contents}
												imgUrl={shop.imgUrl}
												title={shop.title}
												totalRating={shop.totalRating}
												jokboId={shop.jokboId}
												favoriteCnt={shop.favoriteCnt}
												commentCnt={shop.commentCnt}
											/>
										</div>
									</DeletableItem>
								</>
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
