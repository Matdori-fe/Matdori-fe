import Text from "../Text/Text";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export type Left = "back" | "logo" | undefined;
export type Right =
  | "search"
  | "share"
  | "like"
  | "more"
  | "trashCan"
  | "check"
  | "roundButton"
  | undefined;

interface HeaderProps {
  left?: Left;
  right?: Right[] | Right;
  title?: string;
}

export default function Header({ left, right, title }: HeaderProps) {
  return (
    <div className="flex justify-center [&+*]:mt-[60px] bg-white">
      <div className="sm:w-[412px] w-full h-[60px] flex items-center px-4 gap-3.5 [&_p]:flex-1 fixed top-0 bg-white">
        <HeaderLeft left={left} />
        <Text size="lg" fontWeight="bold">
          {title}
        </Text>
        <HeaderRight right={right} />
      </div>
    </div>
  );
}
