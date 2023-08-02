import React from 'react';
import type { Preview } from '@storybook/react';
import '../app/globals.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import RecoilRootWrapper from '../utils/RecoilRootWrapper';

initialize();


const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

// NOTE: recoil과 storybook 함께 사용
const withRecoil = (Story) => {
	return React.createElement(RecoilRootWrapper, {
		children: React.createElement(Story),
	});
};

export const decorators = [withRecoil];

export default preview;
