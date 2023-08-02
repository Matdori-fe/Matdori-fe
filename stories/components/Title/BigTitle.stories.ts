// 사용법 => <BigTitle sideComponent={들어갈 컴포넌트}>제목</BigTitle>
import BigTitle from "@/components/Title/BigTitle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BigTitle> = {
  title: "Test/Title/BigTitle",
  component: BigTitle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BigTitle>;

export const Basic: Story = {
  args: {
    children: "제목 입력",
  },
};
