/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./stories/**/*.{js,ts,jsx,tsx}', // Here!
	],
	theme: {
		extend: {
			colors: {
				// 100~10 => 맛도리 메인 색깔
				100: '#e73b3b',
				80: '#ec6262',
				30: '#f8c5c5',
				10: '#fdecec',
				black: '#000000',
				white: '#FFFFFF',
				gray: '#b3b3b3',
				lightGray: '#e6e6e6',
				darkGray: '#595959',
				blue: '#54A3FF',
				transparent: 'rgba(89, 89, 89, 0.50)',
				yellow: '#FFD600',
			},
			fontFamily: {
				// 폰트 설정 => (font-이름) 으로 적용
				Light: ['Pretendard-Light'],
				Regular: ['Pretendard'],
				Bold: ['Pretendard-Bold'],
				SemiBold: ['Pretendard-Semibold'],
				Medium: ['Pretendard-Medium'],
			},
			fontSize: {
				xxs: '0.5625rem',
			},
			borderRadius: {
				basic: '15px',
			},
			screens: {
				sm: '412px',
				ssm: '320px',
				lm: '340px',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
