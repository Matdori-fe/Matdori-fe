import type { Meta, StoryObj } from '@storybook/react';
import Text from '../../components/Text/Text';

const meta: Meta<typeof Text> = {
	title: 'Test/Text',
	component: Text,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		size: 'lg',
		fontWeight: 'bold',
		children: '내가 한 좋아요',
	},
};

export const Secondary: Story = {
	args: {
		size: 'sm',
		color: '100',
		fontWeight: 'semibold',
		children: '좋아요 한 족보',
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
