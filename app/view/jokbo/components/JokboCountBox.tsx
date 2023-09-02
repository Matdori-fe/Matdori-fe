'use client';
import Text from '@/components/Text/Text';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Toast from '@/components/Toast/Toast';
import EmptyJokbo from '@/app/store/[storeIndex]/component/EmptyJokbo';
// FIXME - 족보 개수 불러와질때 0=>개수로 가는지 체크해서 그러면 스켈레톤 넣어야함.

const JokboCountBox: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/jokbo-count`)
      .then((response) => {
        setCount(response.data.result.count);
      })
      .catch((error) => {
        Toast('Server Error');
      });
  }, []);

  return (
    <>
      <div className="w-full h-auto py-[20px] rounded-[15px] bg-30 mt-[28px] flex justify-center items-center px-[24px] flex-wrap md:flex-nowrap md:justify-between ">
        <img
          src="/tableEating.svg"
          className="w-[120px] w-full max-w-[125px]"
        />

        <div className="w-[120px] font-Regular text-[18px] text-black text-right leading-tight flex flex-wrap justify-center md:justify-end mt-[15px] md:mt-0  md:w-[100px]">
          <span className="mr-1">지금까지</span>

          <div className="w-[130px] flex">
            <span className="font-Bold text-100 mt-[-2px] whitespace-nowrap">
              {count}개의 족보
            </span>
            <span className="font-Regular text-[18px] text-black whitespace-nowrap">
              가
            </span>
          </div>
          <br />
          <span> 작성되었어요.</span>
        </div>
      </div>
    </>
  );
};

export default JokboCountBox;
