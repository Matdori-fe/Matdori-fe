'use client';
import Header from '@/components/Header/Header';
import StoreInfo from './component/StoreInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Button from '@/components/Button/Button';

interface StoreIndexType {
  storeIndex: number;
}

type StoreInformationType = {
  category: string;
  cleanRating: number;
  flavorRating: number;
  imgUrl: string;
  name: string;
  totalRating: number;
  underPricedRating: number;
};

const JokboIntroPage = ({ storeIndex }: StoreIndexType) => {
  const [inFavoriteId, setInFavoriteId] = useState(null);
  const [storeInformation, setStoreInformation] =
    useState<StoreInformationType>();

  const userInfo = useRecoilValue(UserAtom);
  useEffect(() => {
    console.log(storeIndex);
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/info-header?userIndex=${userInfo.userId}`,
          {
            withCredentials: true,
          }
        );
        console.log(result);
        setStoreInformation(result.data.result.storeInformationHeader);
        setInFavoriteId(result.data.result.favoriteStoreIndex);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [storeIndex]);

  return (
    <>
      <Header
        left="back"
        right={['share', 'like']}
        kind="store"
        id={storeIndex}
        title={storeInformation?.name}
        inFavoriteId={inFavoriteId}
        storeShareInfo={{
          storeIndex: storeIndex,
          storeName: storeInformation?.name,
          storeContent: storeInformation?.category,
          imgUrl: storeInformation?.imgUrl,
        }}
      />
      {storeIndex !== 0 && <StoreInfo storeIndex={storeIndex} />}
      <Button
        label="나만의 족보 작성하기"
        variant="active"
        modal={false}
        onClick={() => {}}
        href={`/write/${storeIndex}`}
      />
    </>
  );
};

const JokboLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (!Array.isArray(params.storeIndex)) {
      setCurrentIndex(Number(params.storeIndex));
    }
  }, [params]);

  return (
    <>
      <div className="z-40 relative">
        <JokboIntroPage storeIndex={currentIndex} />
      </div>
      <div className="z-0 relative">{children}</div>
    </>
  );
};

export default JokboLayout;
