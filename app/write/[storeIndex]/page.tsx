'use client';
import Header from '@/components/Header/Header';
import { useState } from 'react';
import ChoiceStore from '../components/ChoiceStore';
import ChoiceStarScrore from '../components/ChoiceStarScore';
import SmallTitle from '@/components/Title/SmallTitle';

const WritePage = ({ params }: { params: { storeIndex: number } }) => {
  const [storeIndex, setStoreIndex] = useState(params.storeIndex);

  return (
    <>
      <Header left="back" right="roundButton" title="족보 작성하기" />
      <SmallTitle
        className="mx-2"
        sideComponent={
          <>
            <div className="px-[10px] pb-[3px] pt-[4.8px] bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex font-Regular text-[9px] text-darkGray">
              가게 변경하기
            </div>
          </>
        }
      >
        선택한 가게
      </SmallTitle>
      <div className="mx-6">
        <ChoiceStore storeIndex={storeIndex} />
        <ChoiceStarScrore />
      </div>
    </>
  );
};

export default WritePage;
