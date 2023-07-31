import SmallButtonBar from "@/components/Button/SmallButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SmallButtonBar> = {
  title: "Test/SmallButtonBar",
  component: SmallButtonBar,
  tags: ["autodocs"],
};

export default meta;

// props=> type: redStoreRecommend | whiteStoreRecommend | redMenuRecommend | whiteMenuRecommend
type Story = StoryObj<typeof SmallButtonBar>;

export const redStoreRecommend: Story = {
  args: {
    type: "redStoreRecommend",
  },
};

export const whiteStoreRecommend: Story = {
  args: {
    type: "whiteStoreRecommend",
  },
};

export const redMenuRecommend: Story = {
  args: {
    type: "redMenuRecommend",
  },
};

export const whiteMenuRecommend: Story = {
  args: {
    type: "whiteMenuRecommend",
  },
};
