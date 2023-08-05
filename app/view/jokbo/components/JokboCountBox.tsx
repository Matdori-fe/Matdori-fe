"use client";
import Text from "@/components/Text/Text";
import { useState } from "react";

const JokboCountBox: React.FC = () => {
  const [count, setCount] = useState(132);

  return (
    <>
      <div className="w-full h-auto py-[20px] rounded-[15px] bg-30 mt-[28px] flex justify-between items-center px-[24px]">
        <img src="/tableEating.svg" className="w-[120px]" />

        <div className="w-full font-Regular text-[18px] text-black text-right leading-tight">
          <span>지금까지</span>
          <br /> <span className="font-Bold text-100">{count}개의 족보</span>
          가
          <br />
          <span> 작성되었어요.</span>
        </div>
      </div>
    </>
  );
};

export default JokboCountBox;
