import ImageBox from '@/components/ImageBox/ImageBox';
import Text from '@/components/Text/Text';

type MenuInput = {
  name: string;
  price: string;
  imgUrl: string;
};

const MenuComponent = ({ name, price, imgUrl }: MenuInput) => {
  return (
    <div className="w-full flex my-2">
      <ImageBox url={imgUrl} size="medium" />
      <div className="flex flex-wrap items-center h-[40px] ml-4 mt-3">
        <div className="text-black text-[14px] font-Regular w-full">{name}</div>
        <div className="w-full h-1" />
        <div className="text-80 text-[14px] font-SemiBold w-full">{price} </div>
      </div>
    </div>
  );
};

export default MenuComponent;
