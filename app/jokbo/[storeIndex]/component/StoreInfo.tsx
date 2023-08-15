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
import { useRecoilValue } from "recoil";
import { UserAtom } from "@/app/status/UserAtom";
import axios from "axios";

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
    name: "none",
    totalRating: 0,
    flavorRating: 0,
    underPricedRating: 0,
    cleanRating: 0,
    imgUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const request = {
    userIndex: Number(userInfo.userId),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/info-header?userIndex=${userInfo.userId}`,
          {
            withCredentials: true,
          }
        );
        console.log(result);
        setStoreData(result.data.result.storeInformationHeader);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <div className="mt-[70px] flex mx-5 flex-wrap">
      {loading ? (
        <StoreInfoSkeleton />
      ) : (
        <>
          <div className="w-full min-w-[295px] flex justify-center">
            <ImageBox size="large" url={storeData?.imgUrl} />

            <div className="w-8/12 min-w-[100px] mt-3 flex justify-between">
              <div className="w-[100px] flex flex-wrap  justify-center">
                <div className="w-full flex justify-center">
                  <Text
                    fontWeight="bold"
                    color="black"
                    size="lg"
                    className="line-clamp-1"
                  >
                    {storeData.name}
                  </Text>
                </div>
                <div className="w-full flex justify-center">
                  <Text
                    className="text-[24px]"
                    fontWeight="medium"
                    color="black"
                  >
                    {storeData?.totalRating.toFixed(1)}
                  </Text>
                </div>

                <StarRate score={storeData?.totalRating} isShowScore={false} />
              </div>
              <div>
                <RoundButton label="정보 수정 요청" onClick={fixInfo} />
                <div className="w-full h-2" />

                <StatusBar
                  flavorRating={Number(storeData.flavorRating.toFixed(1))}
                  underPricedRating={Number(
                    storeData.underPricedRating.toFixed(1)
                  )}
                  cleanRating={Number(storeData.cleanRating.toFixed(1))}
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
