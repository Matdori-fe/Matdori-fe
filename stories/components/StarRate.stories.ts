import StarRate from '@/components/StarRate/StarRate';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StarRate> = {
	title: 'Test/StarRate',
	component: StarRate,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarRate>;

export const Main: Story = {
	args: {
		score: 4.4,
	},
};
