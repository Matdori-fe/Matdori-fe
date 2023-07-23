import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
	title: 'Example/Button',
	component: Text,
	// ...
};

export default meta;

type Story = StoryObj<Text>;

export const Primary: Story = {
	// args: {
	// 	size: 'xxs',
	// },
};

export const Warning: Story = {
	// args: {
	// 	primary: true,
	// 	label: 'Delete now',
	// 	backgroundColor: 'red',
	// },
};
