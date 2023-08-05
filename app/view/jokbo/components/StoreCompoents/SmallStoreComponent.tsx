import ImageBox from "@/components/ImageBox/ImageBox";
import Text from "@/components/Text/Text";
import JokboInfo from "@/components/JokboInfo/JokboInfo";
import Link from "next/link";
type iconKind = "bookMark" | "starScore" | "heartScore" | "chatScore";

type StoreInfo = {
  storeIndex: number;
  name: string;
  imgUrl: string;
  totalRating: number;
  kind: iconKind;
};

const SmallStoreComponent: React.FC<StoreInfo> = ({
  storeIndex,
  name,
  imgUrl,
  totalRating,
  kind,
}) => {
  return (
    <Link href={`/view/jokbo/${storeIndex}`} className="w-[100px] mx-[10px]">
      <ImageBox size="large" url={imgUrl} />
      <div className="flex justify-between px-1 mt-1">
        <Text size="sm" color="black" fontWeight="semibold">
          {name}
        </Text>
        <JokboInfo count={totalRating} kind={kind} />
      </div>
    </Link>
  );
};

export default SmallStoreComponent;
