"use client";
import Header from "@/components/Header/Header";
import StoreInfo from "./component/StoreInfo";
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
      <div className="overflow-auto w-full h-auto">{children}</div>
    </>
  );
};

export default JokboLayout;
