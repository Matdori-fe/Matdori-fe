// 사용법 => <SmallTitle>제목 내용</SmallTitle>

type childrenProps = {
    children: React.ReactNode;
  };
  
  const SmallTitle: React.FunctionComponent<childrenProps> = ({ children }) => {
    return (
      <p className={`font-SemiBold text-[14px]`}>{children}</p>
    );
  };
  
  export default SmallTitle; 
  