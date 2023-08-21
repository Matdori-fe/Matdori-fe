import TabView from "./component/TabView";
const JokboIntroPage = (props: any) => {
  return (
    <>
      <TabView storeIndex={props.params.storeIndex} />
    </>
  );
};

export default JokboIntroPage;
