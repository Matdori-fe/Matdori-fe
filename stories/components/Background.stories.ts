import type { Meta, StoryObj } from '@storybook/react';
import Background from '@/components/Background/Background';

const meta: Meta<typeof Background> = {
	title: 'Test/Background',
	component: Background,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Bg: Story = {};
// export default {
// 	title: 'Button',
// 	component: Button,
// 	argTypes: {
// 		name: {
// 			control: 'text',
// 		},
// 		className: {
// 			control: 'text',
// 		},
// 	},
// } as Meta<typeof Button>;

// const Template: StoryObj<typeof Button> = (args) => <Button {...args} />;
