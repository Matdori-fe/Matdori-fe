// FIXME - 스토리북에선 따로 RecoilRoot로 감싸는게 필요...

import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { RecoilRoot } from "recoil";

const RecoilRootNavigation: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <NavigationBar />
      </RecoilRoot>
    </>
  );
};

const meta: Meta<typeof RecoilRootNavigation> = {
  title: "Test/NavigationBar",
  component: RecoilRootNavigation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RecoilRootNavigation>;

export const Basic: Story = {
  args: {},
};
