"use client";
import { useRouter, useSearchParams } from "next/navigation";
import StoreInfoTab from "../../tabView/StoreInfoTab";
import StoreMenuTab from "../../tabView/StoreMenuTab";
import StoreJokboTab from "../../tabView/StoreJokboTab";

const TabView = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  return (
    <>
      {section === "info" ? <StoreInfoTab /> : <></>}
      {section === "menu" ? <StoreMenuTab /> : <></>}
      {section === "jokbo" ? <StoreJokboTab /> : <></>}
    </>
  );
};

export default TabView;
