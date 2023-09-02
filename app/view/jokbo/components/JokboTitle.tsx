import BigTitle from '@/components/Title/BigTitle';
import { RiSearch2Line } from 'react-icons/ri';
import Link from 'next/link';

const SearchBtn: React.FC = () => {
  return (
    <Link href={'/view/search?tab=Search'}>
      <RiSearch2Line className="text-[18px]" />
    </Link>
  );
};

const JokboTitle: React.FC = () => {
  return (
    <BigTitle className="mt-[48px]" sideComponent={<SearchBtn />}>
      맛도리 족보
    </BigTitle>
  );
};

export default JokboTitle;
