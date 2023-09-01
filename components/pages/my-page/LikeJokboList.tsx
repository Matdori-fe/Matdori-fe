'use client';

import JokboBox from '@/app/store/[storeIndex]/component/JokboBox';
import { deleteAtom } from '@/atoms/delete';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import ErrorPpok from '@/components/Error/ErrorPpok';
import Loading from '@/components/Loading/Loading';
import PageNotification from '@/components/PageNotification/PageNotification';
import ShopItem from '@/components/pages/shop-list/ShopItem';
import { deleteLikeJokbo, useDelete } from '@/hooks/my-likes/useDelete';
import { useDeleteList } from '@/hooks/my-likes/useDeleteList';
import { useFetcher } from '@/hooks/my-likes/useFetcher';
import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilState } from 'recoil';

export default function LikeJokboList() {
	const userIndex = JSON.parse(localStorage.getItem('recoil-persist') || '')
		.user.userId;

	const getJokboList = ({ pageParam = null }) =>
		axios
			.get(
				`${process.env.NEXT_PUBLIC_API}/users/${userIndex}/favorite-jokbos`,
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

	let bottom = useRef(null);

	const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery(
		// 밑줄인 키가 없으면 사이드 이펙트 발생
		// REFACTOR: 쿼리키 수정
		['jokbo'],
		getJokboList,
		{
			getNextPageParam: ({ hasNext, favoriteJokbos }) => {
				if (!hasNext) return undefined;

				const finalJokboId =
					favoriteJokbos[favoriteJokbos.length - 1].favoriteJokboId;
				if (!hasNext) return undefined;
				return finalJokboId;
				// cur는 현재 페이지
				// if (Math.round(totalCnt / 15) === cur) return false;

				// undefined를 반환하면 데이터 호출이 멈춰진다.
			},
			// keepPreviousData: true,
		}
	);

	const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
		entry.isIntersecting && fetchNextPage();

	useObserver({
		target: bottom,
		onIntersect,
	});

	console.log(data);

	const DeletableItem = useDelete({
		query: deleteLikeJokbo,
		queryKey: ['jokbo'],
	});

	const router = useRouter();
	const [deleteMode, setDeleteMode] = useRecoilState(deleteAtom);
	const { resetItems } = useDeleteList();

	// 페이지 이동하면 삭제 모드 꺼지고, 저장했던 항목들 삭제
	useEffect(() => {
		return () => {
			setDeleteMode(false);
			resetItems();
		};
	}, []);

	return (
		<div className='mt-[110px]'>
			{status === 'loading' && <Loading />}
			{status === 'error' && <ErrorPpok />}
			{status === 'success' && data?.pages[0].favoriteJokbos.length === 0 && (
				<PageNotification
					label={`좋아요한 족보가 없어요.\n내가 좋아하는 족보를 찾아볼까요?`}
				/>
			)}
			<div className='grid grid-cols-1 gap-4'>
				{status === 'success' &&
					data.pages.map((group) => (
						<>
							{group.favoriteJokbos.map((shop: any) => (
								<DeletableItem
									key={shop.favoriteJokboId}
									itemId={shop.favoriteJokboId}
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
