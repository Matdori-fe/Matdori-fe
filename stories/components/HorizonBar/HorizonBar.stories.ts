import HorizonBar from "@/components/HorizonBar/HorizonBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HorizonBar> = {
  title: "Test/HorizonBar",
  component: HorizonBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HorizonBar>;

export const Basic: Story = {
  args: {},
};
