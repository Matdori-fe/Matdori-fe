// 사용법 => <Input width="400px" height="40px" placeHolder="뭐 좀 입력해봐"/>
// info에 width, height, placeHolder 값 입력하면 됨. 추가 css를 원하면 className에 tailWind적용해주세요.
// 안하면 default값으로 들어감.

import Input from "@/components/Input/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Test/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    width: "400px",
    height: "40px",
    placeHolder: "뭐 좀 입력해봐",
  },
};
