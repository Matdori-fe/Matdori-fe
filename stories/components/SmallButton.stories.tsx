import type { Meta, StoryObj } from "@storybook/react";
import RecommendSVG from "../assets/recommendimg.svg";
import FoodBar from "../assets/foodBarImg.svg";
import SmartPhone from "../assets/smartPhone.svg";
import HeartWoman from "../assets/heartWoman.svg";
// props=> type: redStoreRecommend | whiteStoreRecommend | redMenuRecommend | whiteMenuRecommend
// myLike | myActivity

type ButtonType =
  | "redStoreRecommend"
  | "whiteStoreRecommend"
  | "redMenuRecommend"
  | "whiteMenuRecommend"
  | "myLike"
  | "myActivity";

const SmallButtonBar: React.FC<{ type: ButtonType }> = (props) => {
  const { type } = props;

  if (type === "redStoreRecommend") {
    return (
      <>
        {/*가게 추천받기 red버전*/}
        <div className="w-[155px] h-[40px] bg-100 rounded-[15px] flex items-center">
          <RecommendSVG />
          <p className="font-Bold text-[14px] text-white">가게 추천받기</p>
        </div>
      </>
    );
  }

  if (type === "whiteStoreRecommend") {
    return (
      <>
        {/*가게 추천받기 white버전*/}
        <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center border-lightGray border-[1px]">
          <RecommendSVG />
          <p className="font-Regular text-[12px] text-darkgray">
            가게 추천받기
          </p>
        </div>
      </>
    );
  }
  if (type === "redMenuRecommend") {
    return (
      <>
        {/* 메뉴 추천받기 red버전*/}
        <div className="w-[155px] h-[40px] bg-100 rounded-[15px] flex items-center justify-between overflow-hidden">
          <p className="font-Bold text-[14px] text-white ml-4">메뉴 추천받기</p>
          <FoodBar />
        </div>
      </>
    );
  }
  if (type === "whiteMenuRecommend") {
    return (
      <>
        {/*메뉴 추천받기 white버전*/}
        <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightGray border-[1px] overflow-hidden">
          <p className="font-Regular text-[12px] text-darkgray ml-5">
            메뉴 추천받기
          </p>
          <FoodBar />
        </div>
      </>
    );
  }
  if (type === "myLike") {
    return (
      <>
        {/*내 좋아요 컴포넌트*/}
        <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightGray border-[1px] px-5">
          <HeartWoman />
          <p className="font-Regular text-[12px] text-darkgray">내 좋아요</p>
        </div>
      </>
    );
  }
  if (type === "myActivity") {
    return (
      <>
        {/*내 활동 컴포넌트*/}
        <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightGray border-[1px] px-5">
          <p className="font-Regular text-[12px] text-darkgray">내 활동</p>
          <SmartPhone />
        </div>
      </>
    );
  }

  return <>잘못된 type 입력</>;
};

const meta: Meta<typeof SmallButtonBar> = {
  title: "Test/SmallButtonBar",
  component: SmallButtonBar,
  tags: ["autodocs"],
};

export default meta;

// props=> type: redStoreRecommend | whiteStoreRecommend | redMenuRecommend | whiteMenuRecommend
type Story = StoryObj<typeof SmallButtonBar>;

export const redStoreRecommend: Story = {
  args: {
    type: "redStoreRecommend",
  },
};

export const whiteStoreRecommend: Story = {
  args: {
    type: "whiteStoreRecommend",
  },
};

export const redMenuRecommend: Story = {
  args: {
    type: "redMenuRecommend",
  },
};

export const whiteMenuRecommend: Story = {
  args: {
    type: "whiteMenuRecommend",
  },
};

export const myLike: Story = {
  args: {
    type: "myLike",
  },
};

export const myActivity: Story = {
  args: {
    type: "myActivity",
  },
};
