import Text from '@/components/Text/Text';
import {
	RiArticleLine,
	RiBillLine,
	RiCustomerServiceLine,
	RiGroupLine,
	RiListOrdered,
	RiListUnordered,
	RiLoginBoxLine,
} from 'react-icons/ri';
import OptionItem from './OptionItem';
import { logout } from '@/lib/user/logout';

export const options = [
	{
		name: '공지사항',
		icon: <RiArticleLine />,
		href: '/notice',
	},
	{
		name: 'FAQ',
		icon: <RiCustomerServiceLine />,
		href: '/faq',
	},
	{
		name: '친구 초대',
		icon: <RiGroupLine />,
	},
	{
		name: '이용약관',
		icon: <RiListOrdered />,
	},
	{
		name: '개인정보 처리방침',
		icon: <RiListUnordered />,
	},
	{
		name: '로그아웃',
		icon: <RiLoginBoxLine />,
		// onClick: logout,
	},
	{
		name: '버전 정보',
		icon: <RiBillLine />,
	},
];

export interface IOption {
	name: string;
	icon: JSX.Element;
	href?: string;
	onClick?: () => void;
}

export default function OptionSection() {
	return (
		<>
			{options.map((item: IOption) => (
				<OptionItem {...item} key={item.name} />
			))}
		</>
	);
}
