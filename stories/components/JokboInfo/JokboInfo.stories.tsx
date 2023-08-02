// 사용방법=> 필수 Input= kind(icon어떤거 할지 => iconKind중에서 고르기), count => 점수, 필요 시: 아이콘+점수를 감싸고 있는 Div태그의 추가 CSS
// ex) <JokboInfo kind="bookMark" count={35}/>
// type iconKind = "bookMark" | "starScore" | "heartScore" | "chatScore";
import JokboInfo from "@/components/JokboInfo/JokboInfo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof JokboInfo> = {
  title: "Test/JokboInfo",
  component: JokboInfo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof JokboInfo>;

export const bookMark: Story = {
  args: { kind: "bookMark", count: 1.0 },
};

export const starScore: Story = {
  args: { kind: "starScore", count: 1.0 },
};

export const heartScore: Story = {
  args: { kind: "heartScore", count: 1.0 },
};

export const chatScore: Story = {
  args: { kind: "chatScore", count: 1.0 },
};
