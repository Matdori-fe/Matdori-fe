import ImageBox from "@/components/ImageBox/ImageBox";
import Text from "@/components/Text/Text";
import JokboInfo from "@/components/JokboInfo/JokboInfo";
import Link from "next/link";

type StoreInfo = {
  storeIndex: number;
  name: string;
  imgUrl: string;
  totalRating: number;
  content: string;
};
const BigStoreComponent: React.FC<StoreInfo> = ({
  storeIndex,
  name,
  imgUrl,
  totalRating,
  content,
}) => {
  return (
    <Link
      href={`/view/jokbo/${storeIndex}`}
      className="w-full h-[120px] rounded-[15px] border-[1px] border-lightGray flex items-center justify-between px-[15px] my-[12px]"
    >
      <ImageBox size="large" url={imgUrl} />
      <div className="w-8/12 h-full ml-[10px] mt-7">
        <Text size="sm" color="black" fontWeight="semibold">
          {name}
        </Text>
        <JokboInfo kind="starScore" count={totalRating} className="mb-1" />
        <Text
          size="xs"
          color="darkGray"
          fontWeight="normal"
          className="line-clamp-2"
        >
          {content}
        </Text>
      </div>
    </Link>
  );
};

export default BigStoreComponent;
