import Text from "@/components/Text/Text";
//title과 옆에 들어갈 컴포넌트를 넣는 컴포넌트
type Block = {
  title: string;
  sideComponent: React.ReactElement;
};

const BlockComponent = ({ title, sideComponent }: Block) => {
  return (
    <div className="w-full flex my-3">
      <Text
        fontWeight="medium"
        color="darkGray"
        size="xs"
        className="whitespace-nowrap"
      >
        {" "}
        {title}
      </Text>
      <div className="w-2" />
      {sideComponent}
    </div>
  );
};

export default BlockComponent;
