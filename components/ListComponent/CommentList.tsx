'use client';

import Loading from '@/components/Loading/Loading';
import PageNotification from '@/components/PageNotification/PageNotification';

import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import ErrorPpok from '@/components/Error/ErrorPpok';
import Review from '../Review/Review';

type JokboIndexType = {
  jokboIndex: number;
};

type InReviewType = {
  commentIndex: number;
  createdAt: string;
  contents: string;
  checkDeleted: boolean;
  userIndex: number;
  nickname: string;
};

export default function CommentList({ jokboIndex }: JokboIndexType) {
  // REFACTOR: 함수 분리
  const getCommentList = ({ pageParam = null }) =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/jokbos/${jokboIndex}/comments`, {
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
    ['commentList'],
    getCommentList,
    {
      getNextPageParam: ({ hasNext, commentList }) => {
        if (!hasNext) return undefined;

        const finalCommentId = commentList[commentList.length - 1].commentIndex;
        return finalCommentId;
      },
      keepPreviousData: true,
    }
  );

  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <div className="w-full">
      {status === 'loading' && <Loading />}
      {status === 'error' && (
        <ErrorPpok errorMessage="serverError" variant="normal" />
      )}
      {status === 'success' && data?.pages[0].commentList.length === 0 && (
        <PageNotification
          label={`작성한 댓글이 없어요.\n족보에 댓글을 작성해보세요.`}
        />
      )}
      <div className="grid grid-cols-1">
        {status === 'success' &&
          data.pages.map((group) => (
            <>
              {group.commentList.map((comment: InReviewType, idx: number) => (
                <Review
                  key={idx}
                  content={comment.contents}
                  heartCount={5}
                  title={comment.nickname}
                  writeDay={comment.createdAt}
                />
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
