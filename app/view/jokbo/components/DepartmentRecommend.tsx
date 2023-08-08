"use client";
import { useRecoilValue } from "recoil";
import { UserAtom } from "@/app/status/UserAtom";
import { useState, useEffect } from "react";
import axios from "axios";
import BigTitle from "@/components/Title/BigTitle";
import Text from "@/components/Text/Text";
import SmallStoreComponent from "./StoreCompoents/SmallStoreComponent";
import SmallStoreSkeleton from "@/app/Skeleton/SmallStoreSkeleton";
// FIXME => list에 값 담아서 map으로 뿌려주는 작업 필요. 지금은 그냥 넣어놓음.

const DepartMentRecommened: React.FC = () => {
  const myDepartMent = useRecoilValue(UserAtom).department;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/department?department=${myDepartMent}`
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
      <BigTitle className="mt-[30px] mb-1">{myDepartMent}의 맛도리</BigTitle>
      <Text size="xs" color="gray" fontWeight="medium">
        우리 학과 사람들이 가장 많이 찾는 맛도리만 모아봤어요.
      </Text>

      <div className="w-full flex overflow-x-scroll mt-3 hide-scroll">
        {loading === true ? (
          <>
            <div className="flex">
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
            </div>
          </>
        ) : (
          <div className="flex">
            <SmallStoreComponent
              storeIndex={0}
              name="가메이"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              kind="starScore"
            />
            <SmallStoreComponent
              storeIndex={0}
              name="가메이"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              kind="starScore"
            />
            <SmallStoreComponent
              storeIndex={0}
              name="가메이"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              kind="starScore"
            />
            <SmallStoreComponent
              storeIndex={0}
              name="가메이"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              kind="starScore"
            />
            <SmallStoreComponent
              storeIndex={0}
              name="가메이"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              kind="starScore"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DepartMentRecommened;