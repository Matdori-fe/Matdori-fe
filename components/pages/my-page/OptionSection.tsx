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
import ShareFriend from './ShareFriend/ShareFriend';

// REFACTOR: 굳이 href 방식이 아닌 다른 방식으로 해도될 것 같음. 불필요한 페이지가 만들어지기 때문임
export const options = [
  {
    name: '공지사항',
    icon: <RiArticleLine />,
    href: '/notice',
  },
  {
    name: 'FAQ',
    icon: <RiCustomerServiceLine />,
    href: '/qna',
  },
  {
    name: '친구 초대',
    icon: <RiGroupLine />,
  },
  {
    name: '이용약관',
    icon: <RiListOrdered />,
    href: '/terms-of-service',
  },
  {
    name: '개인정보 처리방침',
    icon: <RiListUnordered />,
    href: '/privacy-policy',
  },
  {
    name: '로그아웃',
    icon: <RiLoginBoxLine />,
    href: '/logout',
  },
  {
    name: '버전 정보',
    icon: <RiBillLine />,
    href: '/version',
  },
];

export interface IOption {
  name: string;
  icon: JSX.Element;
  href?: string;
  onClick?: JSX.Element;
}

export default function OptionSection() {
  return (
    <>
      {options.map((item: IOption) => (
        <OptionItem {...item} key={item.name} />
      ))}
      <ShareFriend />
    </>
  );
}
