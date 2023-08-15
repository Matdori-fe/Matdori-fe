"use client";

import { RiStarFill } from "react-icons/ri";
import Text from "../Text/Text";
import styled from "styled-components";

interface StarRateProps {
  score: number;
  isShowScore?: boolean;
}

const StarWrapper = styled.div<{ score: number }>`
  width: ${(props) => props.score * 12}px;
`;

export default function StarRate({ score, isShowScore = true }: StarRateProps) {
  return (
    <div className="flex items-center [&>p]:ml-[5px] ">
      <RiStarFill className="fill-lightGray" size="12" />
      <RiStarFill className="fill-lightGray" size="12" />
      <RiStarFill className="fill-lightGray" size="12" />
      <RiStarFill className="fill-lightGray" size="12" />
      <RiStarFill className="fill-lightGray" size="12" />
      <StarWrapper className="absolute flex overflow-hidden" score={score}>
        <p>
          <RiStarFill className="fill-yellow" size="12" />
        </p>
        <p>
          <RiStarFill className="fill-yellow" size="12" />
        </p>
        <p>
          <RiStarFill className="fill-yellow" size="12" />
        </p>
        <p>
          <RiStarFill className="fill-yellow" size="12" />
        </p>
        <p>
          <RiStarFill className="fill-yellow" size="12" />
        </p>
      </StarWrapper>
      {isShowScore === true ? (
        <Text color="darkGray" size="xs">
          {score}
        </Text>
      ) : (
        <></>
      )}
    </div>
  );
}

{
  /* <RiStarFill className='fill-blue text-[12px]' />
<RiStarFill className='fill-blue' size='12' />
<RiStarFill className='fill-blue' size='12' />
<RiStarFill className='fill-blue' size='12' />
<RiStarFill className='fill-blue' size='12' /> */
}
