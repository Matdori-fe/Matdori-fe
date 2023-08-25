import ImageBox from '@/components/ImageBox/ImageBox';
import Text from '@/components/Text/Text';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import Link from 'next/link';
type iconKind = 'bookMark' | 'starScore' | 'heartScore' | 'chatScore';

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
    <div className="w-[100px] min-w-[100px]">
      <Link href={`/store/${storeIndex}?tab=shop&section=info`}>
        <ImageBox size="large" url={imgUrl} />
        <div className="flex justify-between px-1 mt-1">
          <Text
            size="sm"
            color="black"
            fontWeight="semibold"
            className="line-clamp-1"
          >
            {name}
          </Text>
          <JokboInfo count={totalRating} kind={kind} />
        </div>
      </Link>
    </div>
  );
};

export default SmallStoreComponent;
