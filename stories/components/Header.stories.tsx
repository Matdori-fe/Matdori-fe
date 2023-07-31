import type { Meta, StoryObj } from '@storybook/react';
import Header, { Right } from '@/components/Header/Header';
import RoundButton from '@/components/RoundButton/RoundButton';

const meta: Meta<typeof Header> = {
	title: 'Test/Header',
	component: Header,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Main: Story = {
	args: {
		title: '맛도리',
		left: 'logo',
		right: 'roundButton',
	},
};

export const Basic: Story = {
	args: {
		title: '회원가입',
		left: 'back',
	},
};

export const None: Story = {
	args: {
		title: '회원가입',
	},
};

const rightIcons: Right[] = ['more', 'share', 'like'];
export const RightButtons: Story = {
	args: {
		title: '미련한 컴공님의 족보',
		left: 'back',
		right: rightIcons,
	},
};

export const TrashCan: Story = {
	args: {
		title: '미련한 컴공님의 족보',
		left: 'back',
		right: 'trashCan',
	},
};
