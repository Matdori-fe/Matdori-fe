// 사용법 => <BigTitle>제목 내용</BigTitle>

type childrenProps = {
  children: React.ReactNode;
};

const BigTitle: React.FunctionComponent<childrenProps> = ({ children }) => {
  return (
    <p className={`font-Bold text-[18px]`}>{children}</p>
  );
};

export default BigTitle; 
