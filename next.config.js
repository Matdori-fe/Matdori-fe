/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: [
			'matdori.s3.ap-northeast-2.amazonaws.com',
			'matdori-repo.s3.ap-northeast-2.amazonaws.com',
		],
	},
};

module.exports = nextConfig;
