// 사용 방법 : title: string / content: string / writeDay: string/ heartCount:number에 값을 넣어주세요.
// ex) <Review title="미련한 컴공" content="이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ" writeDay="23/04/20 22:22" heartCount={5}/>

import type { Meta, StoryObj } from "@storybook/react";
import Review from "@/components/Review/Review";

const meta: Meta<typeof Review> = {
  title: "Test/Review",
  component: Review,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Review>;

export const Basic: Story = {
  args: {
    title: "미련한 컴공",
    content: "이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ",
    writeDay: "23/04/20 22:22",
    heartCount: 5,
  },
};
