import Header from "@/components/Header/Header";
import StoreInfo from "./component/StoreInfo";
import StoreInfoSkeleton from "@/app/Skeleton/StoreInfoSkeleton";
import SelectTab from "@/components/SelectTab/SelectTab";
import React from "react";
import { NextPageContext } from "next";

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

const JokboLayout = ({
  children,
  storeIndex,
}: {
  children: React.ReactNode;
  storeIndex: number;
}) => {
  return (
    <>
      <JokboIntroPage storeIndex={storeIndex} />
      {children}
    </>
  );
};

JokboLayout.getInitialProps = async (context: NextPageContext) => {
  const { storeIndex } = context.query;
  console.log(storeIndex);
  return { storeIndex: Number(storeIndex) };
};

export default JokboLayout;
