// 사용법 => <SmallTitle sideComponent={들어갈 컴포넌트}>제목</SmallTitle>

type childrenProps = {
  sideComponent?: React.ReactElement;
  children: React.ReactNode;
  className?: string;
};

// "w-[372px] sm:w-[calc(100%)] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-4";
const SmallTitle: React.FunctionComponent<childrenProps> = ({
  sideComponent,
  children,
  className,
}) => {
  return (
    <div className="flex justify-center w-full">
      <div
        className={`w-[412px] sm:w-[calc(100%)] flex justify-between items-center px-4 ${className}`}
      >
        <p className={`font-SemiBold text-[14px] line-clamp-1`}>{children}</p>
        {sideComponent}
      </div>
    </div>
  );
};

export default SmallTitle;
