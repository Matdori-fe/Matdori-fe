import Header from "@/components/Header/Header";
import StoreInfoSkeleton from "@/app/Skeleton/StoreInfoSkeleton";
import SelectTab from "@/components/SelectTab/SelectTab";
import StoreInfo from "./component/StoreInfo";

interface PageProps {
  params: { storeIndex: number };
}

const JokboIntroPage = ({ params }: PageProps) => {
  return (
    <>
      <SelectTab />
      <div className="h-[1000px]">ss</div>
    </>
  );
};

export default JokboIntroPage;
