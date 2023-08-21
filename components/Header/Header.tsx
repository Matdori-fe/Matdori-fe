import Text from '../Text/Text';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export type Left = 'back' | 'logo' | undefined;
export type Right =
  | 'search'
  | 'share'
  | 'like'
  | 'more'
  | 'trashCan'
  | 'check'
  | 'roundButton'
  | undefined;

type LikeKind = 'store' | 'jokbo' | 'review';

interface HeaderProps {
  left?: Left;
  right?: Right[] | Right;
  title?: string;
  kind?: LikeKind; // 추가: kind 값
  id?: number;
  inFavoriteId?: number | null;
}

export default function Header({
  left,
  right,
  title,
  kind,
  id,
  inFavoriteId,
}: HeaderProps) {
  return (
    <div className="flex justify-center [&+*]:mt-[60px] bg-white">
      <div className="z-2 sm:w-[412px] w-full h-[60px] flex items-center px-[20px] gap-3.5 [&_p]:flex-1 fixed top-0 bg-white">
        <HeaderLeft left={left} />
        <Text size="lg" fontWeight="bold">
          {title}
        </Text>
        {right && kind && id && (
          <HeaderRight
            right={right}
            kind={kind}
            id={id}
            inFavoriteId={inFavoriteId}
          />
        )}
      </div>
    </div>
  );
}
