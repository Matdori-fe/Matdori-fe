"use client";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const BottomButton = () => {
  const router = useRouter();
  function moveWriteJokbo() {
    router.push("/jokbo/write");
  }

  return (
    <>
      <Button
        label="나만의 족보 작성하기"
        variant="active"
        modal={false}
        onClick={moveWriteJokbo}
      />
    </>
  );
};
export default BottomButton;