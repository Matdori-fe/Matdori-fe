'use client';
import Text from '@/components/Text/Text';
import StatusBar from '@/components/StatusBar/StatusBar';
import StarRate from '@/components/StarRate/StarRate';
import ImageBox from '@/components/ImageBox/ImageBox';
import RoundButton from '@/components/RoundButton/RoundButton';
import { RiAwardFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import StoreInfoSkeleton from '@/app/Skeleton/StoreInfoSkeleton';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import axios from 'axios';

type StoreInfoHeader = {
  name: string;
  totalRating: number;
  flavorRating: number;
  underPricedRating: number;
  cleanRating: number;
  imgUrl: string;
};

const StoreInfo = ({ storeIndex }: { storeIndex: number }) => {
  //정보 수정 요청 함수
  function fixInfo() {}
  const userInfo = useRecoilValue(UserAtom);

  const [storeData, setStoreData] = useState<StoreInfoHeader>({
    name: 'none',
    totalRating: 0,
    flavorRating: 0,
    underPricedRating: 0,
    cleanRating: 0,
    imgUrl: '',
  });
  const [storeContent, setStoreContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/info-header?userIndex=${userInfo.userId}`,
          {
            withCredentials: true,
          }
        );
        setStoreData(result.data.result.storeInformationHeader);
        setStoreContent(result.data.result.contents);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <div className="mt-[100px] flex flex-wrap">
      {loading ? (
        <StoreInfoSkeleton />
      ) : (
        <>
          <div className="w-full min-w-[295px] mt-[20px] flex mx-4 justify-between">
            <ImageBox size="large" url={storeData?.imgUrl} />

            <div className="w-full flex flex-wrap flex-col justify-between ml-3">
              <div className="flex justify-around">
                <div className="w-[70px] h-auto flex flex-wrap justify-center items-center">
                  <div className="w-full text-center h-[35px] font-Medium text-[24px]">
                    {storeData?.totalRating.toFixed(1)}
                  </div>

                  <StarRate
                    score={storeData?.totalRating}
                    isShowScore={false}
                  />
                </div>
                <div className=" flex flex-wrap justify-end">
                  <StatusBar
                    flavorRating={Number(storeData.flavorRating.toFixed(1))}
                    underPricedRating={Number(
                      storeData.underPricedRating.toFixed(1)
                    )}
                    cleanRating={Number(storeData.cleanRating.toFixed(1))}
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-lightGray w-full flex py-[4px]">
                <RiAwardFill className="w-[12px] text-100 mx-1 mr-2 mt-[0.5px]" />
                <Text fontWeight="medium" size="xs" className="line-clamp-1">
                  {storeContent}
                </Text>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StoreInfo;
