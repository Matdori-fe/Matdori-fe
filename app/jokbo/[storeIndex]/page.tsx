import Header from "@/components/Header/Header";
import StoreInfo from "./component/StoreInfo";
interface PageProps {
  params: { storeIndex: number };
}

const JokboIntroPage = ({ params }: PageProps) => {
  return (
    <>
      <Header left="back" right={["share", "like"]} title="" />
      <StoreInfo storeIndex={params.storeIndex} />
    </>
  );
};

export default JokboIntroPage;
