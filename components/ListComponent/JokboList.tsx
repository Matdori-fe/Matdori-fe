'use client';

import JokboBox from '@/app/store/[storeIndex]/component/JokboBox';
import ErrorPpok from '@/components/Error/ErrorPpok';
import Loading from '@/components/Loading/Loading';
import PageNotification from '@/components/PageNotification/PageNotification';
import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

type StoreIndexType = {
  storeIndex: number;
};

export default function JokboList({ storeIndex }: StoreIndexType) {
  const getJokboList = ({ pageParam = null }) =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/jokbos`, {
        params: {
          cursor: pageParam,
          order: '최신순',
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
    ['jokboList'],
    getJokboList,
    {
      getNextPageParam: ({ hasNext, jokboList }) => {
        if (!hasNext) return undefined;

        const finalJokboId = jokboList[jokboList.length - 1].jokboId;
        return finalJokboId;
      },
      keepPreviousData: true, // 새 데이터를 요청해 갈아끼우기 직전까지 이전 데이터 유지
    }
  );

  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });

  console.log(data);

  return (
    <div className="w-full">
      {status === 'loading' && <Loading />}
      {status === 'error' && (
        <ErrorPpok errorMessage="serverError" variant="normal" />
      )}
      {status === 'success' && data?.pages[0].jokboList.length === 0 && (
        <PageNotification
          label={`작성한 족보가 없어요.\n족보를 작성하러 가볼까요?`}
        />
      )}
      <div className="grid grid-cols-1 gap-4 ">
        {status === 'success' &&
          data.pages.map((group, i) => (
            <>
              {group.jokboList.map((jokbo: any) => (
                <>
                  <JokboBox
                    contents={jokbo.contents}
                    imgUrl={jokbo.imgUrl}
                    title={jokbo.title}
                    totalRating={jokbo.totalRating}
                    jokboId={jokbo.jokboId}
                    favoriteCnt={jokbo.favoriteCnt}
                    commentCnt={jokbo.commentCnt}
                  />
                </>
              ))}
            </>
          ))}
      </div>
      <div ref={bottom} />
      {/* {hasNextPage ? <div ref={bottom}></div> : <p>끝</p>} */}
      {isFetchingNextPage && <Loading />}

      <div className="mt-[60px]" />
    </div>
  );
}
