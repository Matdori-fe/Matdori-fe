"use client";
import SelectTab from "@/components/SelectTab/SelectTab";
import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import DayTimeText from "./components/DayTimeText";
import BlockComponent from "./components/BlockComponent";
import Text from "@/components/Text/Text";
import axios from "axios";
import StoreTime from "./components/StoreTime";
import Map from "./components/StoreMap";
type StoreIndexIn = {
  storeIndex: number;
};
type StoreTimeArr = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};
type StoreInfo = {
  address: string;
  phoneNumber: string;
  time: StoreTimeArr;
};
const StoreInfoTab = ({ storeIndex }: StoreIndexIn) => {
  const [storeInfo, setStoreInfo] = useState<StoreInfo>({
    address: "",
    phoneNumber: "",
    time: {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
  });
  // 스크롤 감지 부분
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    setIsFixed(window.scrollY >= 175);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/information`
        );
        setStoreInfo(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <>
      <div className="mb-[100px] h-auto">
        <div
          className={`${
            isFixed ? "fixed left-6/12 top-12" : "w-full"
          } z-30 bg-white`}
        >
          <SelectTab />
        </div>
        <div className="w-full mx-4">
          {/* 여기서부터 코드 시작 */}
          <BlockComponent
            title="영업시간"
            sideComponent={<StoreTime storeTimeArr={storeInfo.time} />}
          />
          <BlockComponent
            title="전화번호"
            sideComponent={
              <Text fontWeight="medium" color="black" size="xs">
                {storeInfo.phoneNumber}
              </Text>
            }
          />
          <BlockComponent
            title="가게주소"
            sideComponent={
              <Text fontWeight="medium" color="black" size="xs">
                {storeInfo.address}
              </Text>
            }
          />
          <div
            id="map"
            className="w-11/12 h-[242px] rounded-basic border-lightGray border-1 z-0"
          >
            <Map address={storeInfo.address} />
          </div>
        </div>
        <Button
          label="나만의 족보 작성하기"
          variant="active"
          modal={false}
          onClick={() => {}}
        />
      </div>
    </>
  );
};
export default StoreInfoTab;
