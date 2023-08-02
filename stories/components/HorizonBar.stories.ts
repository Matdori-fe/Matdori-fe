import type { Meta, StoryObj } from '@storybook/react';
import HorizonBar from '@/components/HorizonBar/HorizonBar';

const meta: Meta<typeof HorizonBar> = {
	title: 'Test/HorizonBar',
	component: HorizonBar,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HorizonBar>;

export const Main: Story = {};
