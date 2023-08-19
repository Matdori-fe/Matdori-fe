'use client';
//react-icons/ri/RiHeartFill
//스토어, 족보, 댓글 좋아하기가 있음.
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { useState } from 'react';
import axios from 'axios';
type LikeKind = 'store' | 'jokbo' | 'review';

type LikeInputProps = {
  kind: LikeKind;
  //px기준으로 입력
  size?: string;
};

const Like = ({ kind, size }: LikeInputProps) => {
  const [isClick, setIsClick] = useState(false);

  const heartSize = size ? size : '[20px]';

  return (
    <>
      {isClick ? (
        <>
          <RiHeartFill
            className={`text-${heartSize} text-100`}
            onClick={() => {
              setIsClick(false);
            }}
          />
        </>
      ) : (
        <>
          <RiHeartLine
            className={`text-${heartSize} text-100`}
            onClick={() => {
              setIsClick(true);
            }}
          />
        </>
      )}
    </>
  );
};

export default Like;
