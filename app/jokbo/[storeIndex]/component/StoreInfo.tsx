"use client";
import Text from "@/components/Text/Text";
import StatusBar from "@/components/StatusBar/StatusBar";
import StarRate from "@/components/StarRate/StarRate";
import ImageBox from "@/components/ImageBox/ImageBox";
import BigTitle from "@/components/Title/BigTitle";
import RoundButton from "@/components/RoundButton/RoundButton";
import { RiAwardFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import StoreInfoSkeleton from "@/app/Skeleton/StoreInfoSkeleton";
import axios from "axios";
import BigStoreSkeleton from "@/app/Skeleton/BigStoreSkeleton";

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

  const [storeData, setStoreData] = useState<StoreInfoHeader>({
    name: "none",
    totalRating: 0,
    flavorRating: 0,
    underPricedRating: 0,
    cleanRating: 0,
    imgUrl: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/info-header`
        );
        setStoreData(result.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <div className="mt-[70px] flex mx-5 flex-wrap outline-none">
      {loading ? (
        <StoreInfoSkeleton />
      ) : (
        <>
          <div className="w-full flex justify-center">
            <ImageBox size="large" url={storeData?.imgUrl} />

            <div className="w-full ml-3 mt-3">
              <div className="flex w-full justify-between pr-[20px]">
                <BigTitle totalWidth="w-6/12">{storeData.name}</BigTitle>

                <RoundButton label="정보 수정 요청" onClick={fixInfo} />
              </div>
              <div className="flex justify-between mx-4 mt-1">
                <div className=" flex flex-wrap justify-center w-[50px]">
                  <Text
                    className="text-[24px] mb-2"
                    fontWeight="medium"
                    color="black"
                  >
                    {storeData?.totalRating}
                  </Text>
                  <StarRate
                    score={storeData?.totalRating}
                    isShowScore={false}
                  />
                </div>
                <StatusBar
                  flavorRating={storeData.flavorRating}
                  underPricedRating={storeData.underPricedRating}
                  cleanRating={storeData.cleanRating}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-lightGray w-full p-2 flex mt-4">
            <RiAwardFill className="w-[12px] text-100 mx-1 mr-2 mt-[0.5px]" />
            <Text fontWeight="medium" size="xs" className="line-clamp-1">
              이건 가장 인기가 많은 족보. 와 여기 이 집 잘하네 크~ 개...
            </Text>
          </div>
        </>
      )}
    </div>
  );
};

export default StoreInfo;
