'use client';

import DeleteButton from '@/components/DeleteButton/DeleteButton';
import Loading from '@/components/Loading/Loading';
import ShopItem from '@/components/pages/shop-list/ShopItem';
import {
	deleteLikeJokbo,
	deleteLikeShop,
	useDelete,
} from '@/hooks/my-likes/useDelete';

import { useFetcher } from '@/hooks/my-likes/useFetcher';
import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';

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
		['likeshop', 'hi'],
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
		queryKey: ['likeshop', 'hi'],
	});

	return (
		<>
			<div>
				{/* {status === 'loading' && <p>불러오는 중</p>} */}
				{status === 'error' && <p>에러</p>}
				{status === 'success' &&
					data.pages.map((group, i) => (
						<div
							key={i}
							title={`${i}`}
							className='grid grid-cols-2 gap-4 mt-[110px]'
						>
							{group.favoriteStores.map((shop) => (
								<DeletableItem
									itemId={shop.favoriteStoreId}
									key={shop.favoriteStoreId}
								>
									<ShopItem
										category={shop.category}
										key={shop.name}
										name={shop.name}
										score={3.2}
										jokboCnt={324}
										img={shop.imgUrl}
									/>
								</DeletableItem>
							))}
						</div>
					))}
			</div>
			<div ref={bottom} />
			{/* {hasNextPage ? <div ref={bottom}></div> : <p>끝</p>} */}
			{isFetchingNextPage && <Loading />}

			<div className='mt-[30px]' />
		</>
	);
}
