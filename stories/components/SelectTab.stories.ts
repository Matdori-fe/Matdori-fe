import type { Meta, StoryObj } from '@storybook/react';
import SelectTab from '@/components/SelectTab/SelectTab';

const meta: Meta<typeof SelectTab> = {
	title: 'Test/SelectTab',
	component: SelectTab,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle:
			'(주의) 해당 컴포넌트는 스토리북에서 상호작용(클릭 등)을 할 수 없음',
	},
};

export default meta;
type Story = StoryObj<typeof SelectTab>;

export const Main: Story = {
	args: {
		tab: 'shop',
		section: 'menu',
	},
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/profile',
				query: {
					tab: 'shop',
					section: 'menu',
				},
			},
		},
	},
};
