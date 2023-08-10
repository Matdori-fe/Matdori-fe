"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header/Header";
import StoreInfo from "./component/StoreInfo";
import StoreInfoSkeleton from "@/app/Skeleton/StoreInfoSkeleton";
import SelectTab from "@/components/SelectTab/SelectTab";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface StoreIndexType {
  storeIndex: number;
}

const JokboIntroPage = ({ storeIndex }: StoreIndexType) => {
  return (
    <>
      <Header left="back" right={["share", "like"]} title="" />
      <StoreInfo storeIndex={storeIndex} />
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
      <JokboIntroPage storeIndex={currentIndex} />
      {children}
    </>
  );
};

export default JokboLayout;
