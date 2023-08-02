import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button/Button';

const meta: Meta<typeof Button> = {
	title: 'Test/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: '버튼입니다',
	},
	// NOTE: storybook 주석 문서화
	// argTypes: {
	// 	label: {
	// 		description: '여백의 크기를 설정합니다.',
	// 		table: {
	// 			type: { summary: 'SpacingVariant' },
	// 		},
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Active: Story = {
	args: {
		/** 버튼 안에 들어갈 문장 */
		label: '나도 족보 작성하기',
		variant: 'active',
		writeIcon: true,
		href: '/hi',
	},
};

export const Inactive: Story = {
	args: {
		label: '닉네임 변경하기',
		variant: 'inactive',
		errorMessage: '창이 비어있다고오',
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
