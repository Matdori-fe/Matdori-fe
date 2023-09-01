'use client';

import Header from '@/components/Header/Header';
import { useShopListByCategory } from '@/hooks/view/pages/category';
import { useEffect, useRef, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';
import ShopItem from '@/components/pages/shop-list/ShopItem';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { useObserver } from '@/hooks/useObserver';
import Loading from '@/components/Loading/Loading';
import { selectedSort } from '@/atoms/shop-list/selectedSort';

export default function Page({ params }: { params: { category: string } }) {
	const sort = useRecoilValue(selectedSort);

	const getShopList = ({ pageParam = null }) =>
		axios
			.get(`${process.env.NEXT_PUBLIC_API}/stores`, {
				params: {
					cursor: pageParam,
					category: decodeURIComponent(params.category),
					order: sort,
				},
			})
			.then((res) => {
				console.log(res.data);
				return res?.data.result;
			});

	let bottom = useRef(null);

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery(
		// 밑줄인 키가 없으면 사이드 이펙트 발생
		// REFACTOR: 쿼리키 수정
		[`shop-${decodeURIComponent(params.category)}-${sort}`],
		getShopList,
		{
			getNextPageParam: ({ hasNext, storeList }) => {
				const finalStoreId = storeList[storeList.length - 1].storeId;

				if (!hasNext) return undefined;
				return finalStoreId;
				// cur는 현재 페이지
				// if (Math.round(totalCnt / 15) === cur) return false;

				// undefined를 반환하면 데이터 호출이 멈춰진다.
			},
		}
	);

	const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
		entry.isIntersecting && fetchNextPage();

	useObserver({
		target: bottom,
		onIntersect,
	});

	// const [d, sd] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get(`${process.env.NEXT_PUBLIC_API}/stores`, {
	// 			params: {
	// 				pageCount: 1,
	// 				category: decodeURIComponent(params.category),
	// 			},
	// 		})
	// 		.then((res) => {
	// 			sd(res.data.result.storeList);
	// 			console.log(res.data);
	// 			return res?.data.result;
	// 		});
	// }, []);

	// TODO: 불러오는중, 에러 인 경우 두 가지 다른 컴포넌트 띄우기
	return (
		<>
			<div className='grid grid-cols-2 gap-4'>
				{status === 'loading' && <p>불러오는 중</p>}
				{status === 'error' && <p>에러</p>}
				{status === 'success' &&
					data.pages.map((group) => (
						<>
							{group.storeList.map((shop: any) => (
								<ShopItem
									shopId={shop.storeId}
									key={shop.name}
									name={shop.name}
									score={shop.totalRating.toFixed(1)}
									jokboCnt={shop.jokboCnt}
									img={shop.imgUrl}
									category={shop.category}
								/>
							))}
						</>
					))}
			</div>
			<div ref={bottom} />
			{/* {hasNextPage ? <div ref={bottom}></div> : <p>끝</p>} */}
			{isFetchingNextPage && <Loading />}

			<div className='mt-[30px]' />
		</>
	);
}

// const getShopListByCategory = async () => {
// 	const response = await fetch(
// 		`${process.env.NEXT_PUBLIC_API}/stores?pageCount=${1}&category=한식`,
// 		{ cache: 'no-store' }
// 	);

// 	const data = await response.json();
// 	return data.result;
// };
