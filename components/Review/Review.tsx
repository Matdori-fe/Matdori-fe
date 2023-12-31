import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';
import { useState } from 'react';
import { formatDate } from '@/lib/formatDate';
import Like from '../HeaderComponents/Like';
import More from '../HeaderComponents/More';
// 사용 방법 : title: string / content: string / writeDay: string/ heartCount:number에 값을 넣어주세요.
// ex) <Review title="미련한 컴공" content="이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ" writeDay="23/04/20 22:22" heartCount={5}/>
// TODO - 더보기 클릭시에 어떤 것을 취할지 결정해야됌.

type ReviewType = {
  title: string;
  content: string;
  writeDay: string;
  heartCount: number;
  commentId: number;
  commentFavoriteId: number;
  writtenBy: boolean;
};

const Review: React.FC<ReviewType> = ({
  title,
  content,
  writeDay,
  heartCount,
  commentId,
  commentFavoriteId,
  writtenBy,
}) => {
  //내가 하트를 눌렀는지 안눌렀는지에 대한 state
  const [myHeart, setMyHeart] = useState<boolean>(false);
  const [heartCnt, setHeartCnt] = useState(heartCount);
  return (
    <>
      <div className="w-full h-auto border-b-[1.5px] border-lightGray mt-[13px] pb-[10px]">
        <div className="flex items-center justify-between">
          <p className="font-SemiBold text-[14px]">{title}</p>
          <div className="flex">
            <Like
              size="text-[12px]"
              kind="comment"
              id={commentId}
              inFavoriteId={commentFavoriteId}
              setFunc={setHeartCnt}
            />
            {writtenBy && (
              <>
                <div className="w-1" />
                <More id={commentId} kind="comment" />
              </>
            )}
          </div>
        </div>
        <p className="font-Regular text-[12px] text-darkGray mt-[5px] mb-[3px] mr-[7px]">
          {content}{' '}
        </p>
        <div className="flex items-center">
          <p className="font-Regular text-[10px] text-gray mr-[7px]">
            {formatDate(writeDay)}
          </p>
          <RiHeartFill className="w-[12px] h-[12px] text-100" />
          <p className="font-Regular text-[10px] text-100 ml-[3px]">
            {heartCnt}
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
