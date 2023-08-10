"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import StoreInfoTab from "../../tabView/StoreInfoTab";
import StoreMenuTab from "../../tabView/StoreMenuTab";
import StoreJokboTab from "../../tabView/StoreJokboTab";

type StoreIndexIn = {
  storeIndex: number;
};

const TabView = ({ storeIndex }: StoreIndexIn) => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  return (
    <>
      {section === "info" ? <StoreInfoTab storeIndex={storeIndex} /> : <></>}
      {section === "menu" ? <StoreMenuTab storeIndex={storeIndex} /> : <></>}
      {section === "jokbo" ? <StoreJokboTab storeIndex={storeIndex} /> : <></>}
    </>
  );
};

export default TabView;
