import ShopModal from '@/components/Modal/ShopModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ShopModal> = {
	title: 'Test/ShopModal',
	component: ShopModal,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShopModal>;

export const Main: Story = {
	args: {
		showModal: true,
		href: '/',
	},
};
