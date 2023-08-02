"use client";
import { RiCloseFill, RiSendPlane2Fill } from "react-icons/ri";
type Right = {
  cancel: React.ReactNode;
  redArrow: React.ReactNode;
  studentNumEmail: React.ReactNode;
};

const rightContent: Right = {
  cancel: <RiCloseFill className="w-[14px]" />,
  redArrow: <RiSendPlane2Fill className="w-[18px] text-100" />,
  studentNumEmail: (
    <div className="font-Medium text-sm text-darkGray">@inha.edu </div>
  ),
};

export default rightContent;
