'use client';
//스토어, 족보, 댓글 좋아하기가 있음.
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Toast from '../Toast/Toast';

type LikeKind = 'store' | 'jokbo' | 'comment';

// 족보 좋아요 누르기
///users/{userIndex}/favorite-jokbo
// 족보 좋아요 삭제
///users/{userIndex}/favorite-jokbos/{favoriteJokboIndex}
//가게 좋아요 누르기
///users/{userIndex}/favorite-store
// 가게 좋아요 삭제
//users/{userIndex}/favorite-stores/{favoriteStoreIndex}

type favoriteIdType = number | null;

type LikeInputProps = {
  kind?: LikeKind | undefined;
  //px기준으로 입력
  size?: string;
  //가게, 족보, 리뷰에 대한 개별 Index
  id?: number;
  inFavoriteId?: favoriteIdType;
  setFunc?: React.Dispatch<React.SetStateAction<number>>;
};

const Like = ({ kind, size, id, inFavoriteId, setFunc }: LikeInputProps) => {
  const [isClick, setIsClick] = useState(false);
  const user = useRecoilValue(UserAtom);
  const heartSize = size ? size : 'text-[20px]';
  const idName = kind + 'Id';
  const [favoriteId, setFavoriteId] = useState<favoriteIdType>(null);

  // 처음 랜더링 될때 isLike값 반영
  useEffect(() => {
    if (inFavoriteId != null) {
      setIsClick(true);
      setFavoriteId(inFavoriteId);
    }
  }, [inFavoriteId]);

  // 좋아요 버튼 클릭할때마다 좋아요 / 삭제
  const LikeFun = async () => {
    console.log(kind, size, id, favoriteId);
    console.log('함수 실행');
    console.log(idName);
    try {
      // 좋아요가 안눌러져 있는 상태 => 좋아요 하기
      if (!isClick) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/users/${user.userId}/favorite-${kind}`,
          {
            [idName]: id,
          },
          {
            withCredentials: true,
          }
        );
        if (kind === 'store') {
          setFavoriteId(response.data.result.favoriteStoreIndex);
        } else if (kind === 'jokbo') {
          setFavoriteId(response.data.result.favoriteJokboIndex);
        } else if (kind === 'comment') {
          setFavoriteId(response.data.result.favoriteCommentId);
        }
        setIsClick(true);
        if (setFunc) {
          setFunc((prev) => prev + 1);
        }
        console.log('좋아요 성공');
        Toast('좋아요 완료했습니다.');
      }
      // 좋아요 눌러있을때 => 좋아요 취소
      else {
        if (kind === 'comment') {
          const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_API}/users/${user.userId}/favorite-comment/${favoriteId}`,
            {
              withCredentials: true,
            }
          );
        } else {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/users/${user.userId}/favorite-${kind}s`,
            {
              favoriteJokbosId: [favoriteId],
            },
            {
              withCredentials: true,
            }
          );
        }
        setIsClick(false);
        if (setFunc) {
          setFunc((prev) => prev - 1);
        }
        console.log('좋아요 취소');
        Toast('좋아요 취소했습니다.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isClick ? (
        <>
          <RiHeartFill className={`${heartSize} text-100`} onClick={LikeFun} />
        </>
      ) : (
        <>
          <RiHeartLine className={`${heartSize} text-100`} onClick={LikeFun} />
        </>
      )}
    </>
  );
};

export default Like;
