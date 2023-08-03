"use client";
import { RiCloseFill, RiSendPlane2Fill } from "react-icons/ri";
type Right = {
  cancel: React.ReactNode;
  redArrow: React.ReactNode;
};

const rightContent: Right = {
  cancel: <RiCloseFill className="w-[14px]" />,
  redArrow: <RiSendPlane2Fill className="w-[18px] text-100" />,
};

export default rightContent;
