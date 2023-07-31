// 사용법 => <SmallTitle sideComponent={들어갈 컴포넌트}>제목</SmallTitle>
import SmallTitle from "@/components/Title/SmallTitle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SmallTitle> = {
  title: "Test/Title/SmallTitle",
  component: SmallTitle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SmallTitle>;

export const Basic: Story = {
  args: {
    children: "제목 입력",
  },
};
