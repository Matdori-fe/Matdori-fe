"use client";
import BigTitle from "@/components/Title/BigTitle";
import Text from "@/components/Text/Text";
import SmallStoreComponent from "./StoreCompoents/SmallStoreComponent";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { UserAtom } from "@/app/status/UserAtom";
import axios from "axios";
import SmallStoreSkeleton from "@/app/Skeleton/SmallStoreSkeleton";

const MatdoriPick = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const myDepartMent = useRecoilValue(UserAtom).department;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/matdori-pick?department=${myDepartMent}`
        );
        setList(result.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [myDepartMent]);

  return (
    <>
      <BigTitle className="mt-[30px] mb-1">맛도리 PICK</BigTitle>
      <Text size="xs" color="gray" fontWeight="medium">
        맛도리에서 추천하는 가게들을 살펴보세요.
      </Text>
      <div className="w-full flex overflow-x-scroll mt-3 hide-scroll justify-center">
        <div className="w-full flex overflow-x-scroll mt-3 hide-scroll">
          {loading === true ? (
            <div className="flex">
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
            </div>
          ) : (
            <div className="flex">
              {list.map(({ storeIndex, name, imgUrl }) => {
                return (
                  <SmallStoreComponent
                    key={storeIndex}
                    storeIndex={storeIndex}
                    name={name}
                    imgUrl={imgUrl}
                    totalRating={4.9}
                    kind="starScore"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MatdoriPick;
