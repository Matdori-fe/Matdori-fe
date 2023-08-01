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

const Home = ({ searchParams }: Props) => {
  const { modal, sortModal } = searchParams;

  return (
<<<<<<< HEAD
    <div>
      <Header
        right="roundButton"
        title={modal ? "true" : "false"}
        left="back"
      />
      <Text>hi</Text>

      <SortButton label="최신순" href="/?sortModal=true" />
      <SelectTab variant="shop" />
      <StatusBar />

      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <TextArea />
      <Text>hi</Text>
      <Text>hi</Text>
      <StarRate score={3.1} />

      <Button label="hi" variant="active" href="/?modal=true" />
      <Link scroll={false} href="/?modal=true">
        OPEN MODAL, LINK
      </Link>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      {/* <button onClick={() => 'hi'}>hi</button> */}
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>

      <MenuModal showModal={modal} href="/" />
      <SortModal showModal={sortModal} href="/" />
    </div>
=======
    <>
      Home
      <NavigationBar />
    </>
>>>>>>> 1b34eef ([MATDORI-54] design: Review CSS 완료)
  );
};

export default Home;
