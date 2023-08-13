"use client";
import Text from "@/components/Text/Text";
import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "@/components/Toast/Toast";
// FIXME - 족보 개수 불러와질때 0=>개수로 가는지 체크해서 그러면 스켈레톤 넣어야함.

const JokboCountBox: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/jokbo-count`)
      .then((response) => {
        setCount(response.data.result.count);
        console.log(response.data.result);
      })
      .catch((error) => {
        Toast(error);
      });
  }, []);

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
