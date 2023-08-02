import type { Meta, StoryObj } from '@storybook/react';
import StatusBar from '@/components/StatusBar/StatusBar';

const meta: Meta<typeof StatusBar> = {
	title: 'Test/StatusBar',
	component: StatusBar,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusBar>;

export const Main: Story = {
	args: {
		flavorRating: 1.1,
		cleanRating: 2.2,
		underPricedRating: 4.4,
	},
};
