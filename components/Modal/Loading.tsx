import ImageBox from "../ImageBox/ImageBox";
import logo from "../../assets/image/logo.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div>loading...</div>
      <Image src={logo} alt="logo" />
    </>
  );
}
