'use client';

import DeleteButton from '@/components/DeleteButton/DeleteButton';
import Loading from '@/components/Loading/Loading';
import PageNotification from '@/components/PageNotification/PageNotification';
import ShopItem from '@/components/pages/shop-list/ShopItem';
import {
	deleteLikeJokbo,
	deleteLikeShop,
	useDelete,
} from '@/hooks/my-likes/useDelete';
import { AnimatePresence, motion } from 'framer-motion';

import { useFetcher } from '@/hooks/my-likes/useFetcher';
import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import ErrorPpok from '@/components/Error/ErrorPpok';

// FIXME: +swif
export default function LikeShopList() {
	const queryClient = useQueryClient();

	const userIndex = JSON.parse(localStorage.getItem('recoil-persist')).user
		.userId;

	const getShopList = ({ pageParam = null }) =>
		axios
			.get(
				`${process.env.NEXT_PUBLIC_API}/users/${userIndex}/favorite-stores`,
				{
					params: {
						cursor: pageParam,
					},
					withCredentials: true,
				}
			)
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
	console.log(queryClient);

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		refetch,
	} = useInfiniteQuery(
		// 밑줄인 키가 없으면 사이드 이펙트 발생
		// REFACTOR: 쿼리키 수정
		['likeShop'],
		getShopList,
		{
			getNextPageParam: ({ hasNext, favoriteStores }) => {
				if (!hasNext) return undefined;

				const finalStoreId =
					favoriteStores[favoriteStores.length - 1].favoriteStoreId;
				console.log(favoriteStores);
				return finalStoreId;
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
		query: deleteLikeShop,
		queryKey: ['likeShop'],
	});

	console.log(data);

	// REFACTOR: 지워지면 슉하고 빈자리가 채워지는 모션
	return (
		<div className='mt-[130px]'>
			{status === 'loading' && <Loading />}
			{status === 'error' && <ErrorPpok />}
			{status === 'success' && data?.pages[0].favoriteStores.length === 0 && (
				<PageNotification
					label={`좋아요한 가게가 없어요.\n내가 좋아하는 가게를 찾아볼까요?`}
				/>
			)}
			<div className='grid grid-cols-2 gap-4'>
				{status === 'success' &&
					data.pages.map((group, i) => (
						<>
							{group.favoriteStores.map((shop) => (
								<>
									<DeletableItem
										itemId={shop.favoriteStoreId}
										key={shop.favoriteStoreId}
									>
										<ShopItem
											shopId={shop.storeId}
											category={shop.category}
											key={shop.name}
											name={shop.name}
											score={shop.totalRating}
											jokboCnt={shop.jokboCnt}
											img={shop.imgUrl}
										/>
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
