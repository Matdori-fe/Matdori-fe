'use client';

import Loading from '@/components/Loading/Loading';
import PageNotification from '@/components/PageNotification/PageNotification';

import { useObserver } from '@/hooks/useObserver';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import ErrorPpok from '@/components/Error/ErrorPpok';
import Review from '../Review/Review';
import SmallTitle from '../Title/SmallTitle';
import CustomSelect from '../SelectBox/CustomSelect';
import { RiChat3Fill } from 'react-icons/ri';
import { ChangeEvent } from 'react';
import WriteFun from '@/app/jokbo/detail/[jokboIndex]/components/WriteFun';
import Toast from '../Toast/Toast';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Input from '../Input/Input';
import { useQueryClient } from 'react-query';
import Text from '../Text/Text';

type JokboIndexType = {
  jokboIndex: number;
};

//컴포넌트에서 쓰일 ReviewType
type ReviewType = {
  title: string;
  content: string;
  writeDay: string;
  heartCount: number;
};

type ResponseType = {
  response: number | string | undefined;
};

type InReviewType = {
  commentIndex: number;
  createdAt: string;
  contents: string;
  checkDeleted: boolean;
  userIndex: number;
  nickname: string;
  commentFavoriteId: number;
  writtenBy: boolean;
  commentFavoriteCnt: number;
};

export default function CommentList({ jokboIndex }: JokboIndexType) {
  const [kind, setKind] = useState('최신순');
  const [commentCount, setCommentCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = useRecoilValue(UserAtom);
  const queryClient = useQueryClient();
  //댓글 쓰는 로직
  const [writeReview, setWriteReview] = useState('');

  const handleReviewChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWriteReview(e.target.value);
  };

  //댓글 함수
  async function ClickWriteReview() {
    const response: ResponseType = await WriteFun({
      jokboIndex: jokboIndex,
      contents: writeReview,
      userIndex: user.userId,
    });
    if (response.response === 200) {
      Toast('댓글 작성에 성공하였습니다.');

      setWriteReview('');
      queryClient.invalidateQueries([`commentList-${jokboIndex}`]);
      setCommentCount(commentCount + 1);
    } else {
      Toast('댓글 작성에 실패하였습니다.');
    }
  }

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const getCommentList = ({ pageParam = null }) =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/jokbos/${jokboIndex}/comments`, {
        params: {
          cursor: pageParam,
          order: kind,
        },
        headers: {
          userIndex: user.userId,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log('댓글', res.data);
        setCommentCount(res.data.result.commentCnt);
        setLoading(true);
        return res?.data.result;
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });

  let bottom = useRef(null);

  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery(
    [`commentList-${jokboIndex}`],
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
      <SmallTitle sideComponent={<CustomSelect onSelectChange={setKind} />}>
        <div className="flex items-center py-[8px]">
          <RiChat3Fill className="w-[14px] text-blue mr-1" />
          <Text size="sm" fontWeight="semibold">
            댓글 {commentCount}개
          </Text>
        </div>
      </SmallTitle>
      <div className="border-b-[1.5px] border-lightGray mt-2" />

      {status === 'error' && (
        <ErrorPpok errorMessage="serverError" variant="normal" />
      )}
      {status === 'success' &&
        loading === true &&
        data?.pages[0].commentList.length === 0 && (
          <PageNotification
            label={`작성한 댓글이 없어요.\n족보에 댓글을 작성해보세요.`}
          />
        )}
      <div className="grid grid-cols-1">
        {loading === false && <Loading />}
        {status === 'success' &&
          loading === true &&
          data.pages.map((group) => (
            <>
              {group.commentList.map((comment: InReviewType, idx: number) => (
                <Review
                  key={idx}
                  content={comment.contents}
                  heartCount={comment.commentFavoriteCnt}
                  title={comment.nickname}
                  writeDay={comment.createdAt}
                  commentId={comment.commentIndex}
                  commentFavoriteId={comment.commentFavoriteId}
                  writtenBy={comment.writtenBy}
                />
              ))}
            </>
          ))}
      </div>
      <div ref={bottom} />
      {/* {hasNextPage ? <div ref={bottom}></div> : <p>끝</p>} */}
      {status === 'loading' || (isFetchingNextPage && <Loading />)}

      <div className="mt-[60px]" />

      <div className="flex justify-center items-center">
        <div className="w-10/12 max-w-[382px] fixed bottom-4">
          <Input
            inputSize="small"
            inputmode="text"
            value={writeReview}
            onChange={handleReviewChange}
            placeHolder="댓글을 입력하세요."
            right="redArrow"
            rightOnClick={ClickWriteReview}
          />
        </div>
      </div>
    </div>
  );
}
