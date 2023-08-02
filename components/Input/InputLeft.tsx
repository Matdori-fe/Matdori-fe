import { RiSearch2Line, RiArrowLeftLine } from "react-icons/ri";

type Left = {
  lense: React.ReactNode;
  back: React.ReactNode;
};

const leftContent: Left = {
  lense: <RiSearch2Line className="mr-[10px] w-[14px]" />,
  back: <RiArrowLeftLine className="mr-[10px] w-[14px]" />,
};

export default leftContent;
