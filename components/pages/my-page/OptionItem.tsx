'use client';

import Text from '@/components/Text/Text';
import { IOption } from './OptionSection';
import { RiBilibiliFill } from 'react-icons/ri';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import router from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
	RiArticleLine,
	RiBillLine,
	RiCustomerServiceLine,
	RiGroupLine,
	RiListOrdered,
	RiListUnordered,
	RiLoginBoxLine,
} from 'react-icons/ri';
import { useInviteFriend } from '@/hooks/kakao/useInviteFriend';
import Test from './Test';
import ShareFriend from './ShareFriend/ShareFriend';
import Logout from './Logout';

type OptionList = {
	[key in IOption]: {
		name: string;
		icon: JSX.Element;
		href?: string;
		ClickAction?: ({ children }: { children: React.ReactNode }) => JSX.Element;
	};
};

export const options: OptionList = {
	notice: {
		name: '공지사항',
		icon: <RiArticleLine />,
		href: '/notice',
	},
	qna: {
		name: 'FAQ',
		icon: <RiCustomerServiceLine />,
		href: '/qna',
	},
	invite: {
		name: '친구 초대',
		icon: <RiGroupLine />,
		ClickAction: ShareFriend,
	},
	termsOfService: {
		name: '이용약관',
		icon: <RiListOrdered />,
		href: '/terms-of-service',
	},
	privacyPolicy: {
		name: '개인정보 처리방침',
		icon: <RiListUnordered />,
		href: '/privacy-policy',
	},
	logout: {
		name: '로그아웃',
		icon: <RiLoginBoxLine />,
		ClickAction: Logout,
	},
	version: {
		name: '버전 정보',
		icon: <RiBillLine />,
		href: '/version',
	},
};

export default function OptionItem({ variant }: { variant: IOption }) {
	const innerComponent = (
		<div>
			<div className='h-[48px] flex items-center gap-[10px] px-[10px]'>
				<div className='text-sm text-100'>{options[variant].icon}</div>
				<Text size='sm' fontWeight='semibold'>
					{options[variant].name}
				</Text>
			</div>
			<div className='h-[1px] bg-lightGray w-full' />
		</div>
	);

	// NOTE: onClick만 인자로 쓰기엔 훅을 인자로 넣을 수 없어서 어쩔 수 없이 이렇게 분리.
	if (options[variant].ClickAction) {
		const ClickAction = options[variant].ClickAction as ({
			children,
		}: {
			children: React.ReactNode;
		}) => JSX.Element;

		return <ClickAction>{innerComponent}</ClickAction>;
	}

	if (options[variant].href) {
		const href = options[variant].href as string;

		return <Link href={href}>{innerComponent}</Link>;
	}

	return innerComponent;
}
