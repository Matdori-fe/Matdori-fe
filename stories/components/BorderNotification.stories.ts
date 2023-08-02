import type { Meta, StoryObj } from '@storybook/react';
import BorderNotification from '@/components/BorderNotification/BorderNotification';

const meta: Meta<typeof BorderNotification> = {
	title: 'Test/BorderNotification',
	component: BorderNotification,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BorderNotification>;

export const Main: Story = {
	args: {
		label: 'sehyun',
	},
};
