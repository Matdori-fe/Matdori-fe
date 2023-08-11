import Text from "@/components/Text/Text";

const EmptyJokbo = () => {
  return (
    <>
      <div className="w-full h-[300px] flex items-center justify-center">
        <Text
          fontWeight="normal"
          color="darkGray"
          size="xs"
          className="text-center"
        >
          아직 작성된 족보가 없어요. <br />
          가장 먼저 족보를 작성해볼까요?
        </Text>
      </div>
    </>
  );
};

export default EmptyJokbo;
