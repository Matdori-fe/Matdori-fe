import SelectTab from "@/components/SelectTab/SelectTab";
import TabView from "./component/TabView";
const JokboIntroPage = (props: any) => {
  return (
    <>
      <SelectTab />
      <TabView storeIndex={props.params.storeIndex} />
    </>
  );
};

export default JokboIntroPage;
