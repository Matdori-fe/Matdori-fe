// 사용방법: url은 필수로 넣어주고 너비나 높이 소,중,대 까지는 구분되어져 있으며, 다른 사이즈를 원하거나 다른 CSS를 원하면 기호에 맞게 tailwind적용 시켜주세요.
//<ImageBox className="tailwindCSS"" url="이미지url"/>
// type ImageSize = "small" | "medium" | "large"
import ImageBox from "@/components/ImageBox/ImageBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImageBox> = {
  title: "Test/ImageBox",
  component: ImageBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageBox>;

export const Basic: Story = {
  args: {
    size: "medium",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pSYwYSYyI-VGKBVzwaoWmR4sdkvSuIyt7Q&usqp=CAU",
  },
};
