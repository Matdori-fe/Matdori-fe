import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import Header from "@/components/Header/Header";
import Link from "next/link";
import SortModal from "@/components/Modal/SortModal";
import ShopModal from "@/components/Modal/ShopModal";
import MenuModal from "@/components/Modal/MenuModal";
import SortButton from "@/components/SortButton/SortButton";
import StarRate from "@/components/StarRate/StarRate";
import TextArea from "@/components/TextArea/TextArea";
import SelectTab from "@/components/SelectTab/SelectTab";
import StatusBar from "@/components/StatusBar/StatusBar";
import Input from "@/components/Input/Input";
type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: Props) => {
  return (
    <div>
      <Input
        inputSize="small"
        left="back"
        placeHolder="뭐좀 입력해봐!"
        right="cancel"
      />
      <Input
        inputSize="big"
        left="back"
        placeHolder="뭐좀 입력해봐!"
        right="fiveMinTimer"
        goTime={true}
      />
    </div>
  );
};

export default Home;
