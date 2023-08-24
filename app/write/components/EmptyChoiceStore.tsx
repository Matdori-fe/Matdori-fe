import Text from '@/components/Text/Text';
import { RiImage2Line } from 'react-icons/ri';

const EmptyChoiceStore = () => {
  return (
    <div className="w-full h-[80px] border-[1px] border-lightGray rounded-basic mt-[15px] flex px-4 items-center">
      <div className="w-[60px] h-[60px] rounded-basic bg-lightGray flex justify-center items-center">
        <RiImage2Line className="text-[30px] text-gray" />
      </div>
      <div className="flex flex-wrap ml-3">
        <Text
          fontWeight="semibold"
          size="sm"
          color="black"
          className="line-clamp-2"
        >
          지정된 가게 없음
        </Text>
        <div className="w-full h-1"></div>
        <Text
          fontWeight="normal"
          size="xs"
          color="darkGray"
          className="line-clamp-2"
        >
          스토어 카테고리
        </Text>
      </div>
    </div>
  );
};

export default EmptyChoiceStore;
