// 사용법 => <SmallTitle sideComponent={들어갈 컴포넌트}>제목</SmallTitle>

type childrenProps = {
  sideComponent?: React.ReactElement;
  children: React.ReactNode;
  className?: string;
};

const SmallTitle: React.FunctionComponent<childrenProps> = ({
  sideComponent,
  children,
  className,
}) => {
  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      <p className={`font-SemiBold text-[14px]`}>{children}</p>
      {sideComponent}
    </div>
  );
};

export default SmallTitle;
