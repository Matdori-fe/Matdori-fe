// 사용법 => <BigTitle sideComponent={들어갈 컴포넌트}>제목</BigTitle>

type childrenProps = {
  sideComponent?: React.ReactElement;
  children: React.ReactNode;
  className?: string;
  totalWidth?: string;
};

const BigTitle: React.FunctionComponent<childrenProps> = ({
  sideComponent,
  children,
  className,
  totalWidth,
}) => {
  let width = totalWidth ? totalWidth : "w-full";

  return (
    <div className={`flex justify-center ${width}`}>
      <div
        className={`w-full sm:w-[calc(100%)] flex justify-between items-center ${className}`}
      >
        <p className={`font-Bold text-[18px] line-clamp-1`}>{children}</p>
        {sideComponent ? sideComponent : <div> </div>}
      </div>
    </div>
  );
};

export default BigTitle;
