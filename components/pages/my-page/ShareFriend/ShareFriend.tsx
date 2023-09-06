'use client';
import { useEffect, useState } from 'react';

declare global {
	interface Window {
		Kakao: any;
	}
}

const ShareFriend = ({ children }: { children: React.ReactNode }) => {
	const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
	const { Kakao, location } = window;

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
		script.defer = true;
		script.onload = () => {
			setIsKakaoLoaded(true);
		};
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	useEffect(() => {
		if (isKakaoLoaded) {
			Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
		}
	}, [isKakaoLoaded]);

	const onClick = () => {
		if (isKakaoLoaded) {
			Kakao.Link.sendScrap({
				requestUrl: location.href,
				templateId: 97992,
				templateArgs: {},
			});
		}
	};

	return <div onClick={onClick}>{children}</div>;
};

export default ShareFriend;
