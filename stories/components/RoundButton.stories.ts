import type { Meta, StoryObj } from '@storybook/react';
import RoundButton from '../../components/RoundButton/RoundButton';

const meta: Meta<typeof RoundButton> = {
	title: 'Test/RoundButton',
	component: RoundButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RoundButton>;

export const Eng: Story = {
	args: {
		label: 'sehyun',
	},
};

export const Kor: Story = {
	args: {
		label: '세현',
	},
};
