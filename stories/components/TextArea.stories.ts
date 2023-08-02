import TextArea from '@/components/TextArea/TextArea';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
	title: 'Test/TextArea',
	component: TextArea,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Main: Story = {};
