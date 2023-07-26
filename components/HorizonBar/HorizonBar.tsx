import React from 'react';

// 사용방법: 테일윈드에 두께랑 여백을 기호에 맞게 조절하세요.
// 예시: <HorizonBar className="border-t-[3px] mx-[10px]"/>

type HorizonType = {
  className?: string;
};

const HorizonBar: React.FC<HorizonType> = ({ className }) => {
  return (
    <>
      <div className={`w-full border-t-[1px] border-lightGray ${className}`}></div>
    </>
  );
};

export default HorizonBar;
