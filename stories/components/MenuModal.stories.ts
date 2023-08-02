import MenuModal from '@/components/Modal/MenuModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuModal> = {
	title: 'Test/MenuModal',
	component: MenuModal,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuModal>;

export const Main: Story = {
	args: {
		showModal: true,
		href: '/',
	},
};
