// 사용법 => <BigTitle sideComponent={들어갈 컴포넌트}>제목</BigTitle>

type childrenProps = {
  sideComponent?: React.ReactElement;
  children: React.ReactNode;
  className?: string;
};

const BigTitle: React.FunctionComponent<childrenProps> = ({
  sideComponent,
  children,
  className,
}) => {
  return (
    <div className={`w-full flex justify-between items-center	 ${className}`}>
      <p className={`font-Bold text-[18px]`}>{children}</p>
      {sideComponent}
    </div>
  );
};

export default BigTitle;
