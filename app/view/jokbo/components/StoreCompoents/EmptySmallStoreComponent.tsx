import Text from '@/components/Text/Text';
import Image from 'next/image';
const EmptySmallStoreComponent = () => {
  return (
    <>
      <div className="w-[100px] min-w-[100px] flex flex-wrap justify-center mr-4">
        <div className="w-[100px] h-[100px] bg-lightGray rounded-basic flex justify-center items-center mb-1">
          <div className="w-[80px] h-[80px]">
            <Image
              src={'/logout_ppok.png'}
              alt="Empty_pook"
              width={200}
              height={100}
            />
          </div>
        </div>
        <Text
          size="xs"
          color="black"
          fontWeight="semibold"
          className="line-clamp-1"
        >
          데이터가 부족해요
        </Text>
      </div>
    </>
  );
};

export default EmptySmallStoreComponent;
