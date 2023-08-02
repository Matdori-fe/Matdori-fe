import SortModal from '@/components/Modal/SortModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SortModal> = {
	title: 'Test/SortModal',
	component: SortModal,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle:
			'(주의) 끌어내려서 닫기는 스토리북의 경로이동의 불가로 동작하지 않는 걸로 보임',
	},
};

export default meta;
type Story = StoryObj<typeof SortModal>;

export const Main: Story = {
	args: {
		showModal: true,
		href: '/',
	},
};
