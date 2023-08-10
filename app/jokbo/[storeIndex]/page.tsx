import Header from "@/components/Header/Header";
import StoreInfoSkeleton from "@/app/Skeleton/StoreInfoSkeleton";
import SelectTab from "@/components/SelectTab/SelectTab";
import StoreInfo from "./component/StoreInfo";
import TabView from "./component/TabView";

interface PageProps {
  params: { storeIndex: number };
}

const JokboIntroPage = ({ params }: PageProps) => {
  return (
    <>
      <SelectTab />
      <TabView />
    </>
  );
};

export default JokboIntroPage;
