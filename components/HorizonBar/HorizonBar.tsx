import React from 'react';

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
