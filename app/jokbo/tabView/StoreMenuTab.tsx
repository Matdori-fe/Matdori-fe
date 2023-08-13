import SelectTab from "@/components/SelectTab/SelectTab";
import HorizonBar from "@/components/HorizonBar/HorizonBar";
import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
type StoreIndexIn = {
  storeIndex: number;
};

const StoreMenuTab = ({ storeIndex }: StoreIndexIn) => {
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
  return (
    <>
      <div className="mb-[150px] h-auto">
        <div
          className={`${
            isFixed ? "fixed left-6/12 top-12" : "w-full"
          } z-30 bg-white`}
        >
          <SelectTab />
          <HorizonBar className="mt-2" />
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

export default StoreMenuTab;
