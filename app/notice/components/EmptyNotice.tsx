import Text from '@/components/Text/Text';

const EmptyNotice = () => {
  return (
    <>
      <div className="w-full h-[300px] flex items-center justify-center">
        <Text
          fontWeight="normal"
          color="darkGray"
          size="xs"
          className="text-center"
        >
          아직 작성된 공지사항이 없어요.
        </Text>
      </div>
    </>
  );
};

export default EmptyNotice;
