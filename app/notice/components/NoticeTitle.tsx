//공지사항을 요약해서 담고있는 박스 컴포넌트
import { NoticeType } from '../Notice_Type/Notice_Type';
import Text from '@/components/Text/Text';
import Link from 'next/link';

const NoticeTitle = ({
  noticeIndex,
  title,
  contents,
  createdAt,
}: NoticeType) => {
  return (
    <Link href={`/notice/${noticeIndex}`}>
      <div className="py-2 border-b-[1px] border-lightGray">
        <Text fontWeight="semibold" size="sm" color="black">
          {title}
        </Text>
        <div className="w-full h-2" />
        <Text
          fontWeight="normal"
          size="xs"
          color="darkGray"
          className="line-clamp-2"
        >
          {contents}
        </Text>
        <div className="w-full h-1" />
        <div className="font-Regular text-[10px] text-gray">{createdAt}</div>
      </div>
    </Link>
  );
};

export default NoticeTitle;
