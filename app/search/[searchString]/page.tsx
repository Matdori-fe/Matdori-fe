'use client';

import { searchAtom } from '@/atoms/search/searchAtom';
import { selectedSort } from '@/atoms/shop-list/selectedSort';
import Loading from '@/components/Loading/Loading';
import Text from '@/components/Text/Text';
import ShopItem from '@/components/pages/shop-list/ShopItem';
import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Page({ params }: { params: { searchString: string } }) {
  const sort = useRecoilValue(selectedSort);
  const [searchInput, setSearchInput] = useRecoilState(searchAtom);

  const getShopList = ({ pageParam = null }) =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/stores`, {
        params: {
          cursor: pageParam,
          category: '한식',
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
    [`shop-${decodeURIComponent(params.searchString)}-${sort}`],
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

  const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });

  const searchString = useRecoilValue(searchAtom);

  return (
    <div>
      {/* {decodeURIComponent(params.searchString)} */}
      {status === 'loading' && <Loading />}
      {status === 'success' && data.pages.length === 0 && (
        <Text className="w-full pt-[100px] flex justify-center" size="sm">
          <span className="text-100 font-SemiBold">{searchString}</span>에 대한
          검색 결과가 존재하지 않아요.
        </Text>
      )}
      <div className="grid grid-cols-2 gap-4">
        {status === 'error' && <p>에러</p>}
        {/* 검색 결과가 0이면 없다고 표시하는건데 잘 동작하는지는 테스트해봐야할 것 같다. */}

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

      <div className="mt-[30px]" />
    </div>
  );
}

// TODO: 검색어에 대한 검색 결과 나열 필요
