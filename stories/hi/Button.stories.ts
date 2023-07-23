import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button/Button';

const meta: Meta<typeof Button> = {
	title: 'Test/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		name: 'sehyun',
	},
};
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
