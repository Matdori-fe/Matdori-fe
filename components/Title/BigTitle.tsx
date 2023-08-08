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
    <div className="flex justify-center w-full">
      <div
        className={`w-full sm:w-[calc(100%)] flex justify-between items-center px-4 ${className}`}
      >
        <p className={`font-Bold text-[18px]`}>{children}</p>
        {sideComponent ? sideComponent : <div> </div>}
      </div>
    </div>
  );
};

export default BigTitle;
