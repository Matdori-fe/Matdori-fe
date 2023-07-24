// 사용법 => <Input info={{width:"500px",height:"200px",placeHolder:"placeHolder 설정"}}/>
// info에 width, height, placeHolder 값 입력하면 됨. 
// 안하면 default값으로 들어감.

type InputType = {
  width?: string;
  height?: string;
  placeHolder?: string;
};

const Input: React.FC<{ info?: InputType }> = (props) => {
  const { info } = props;

  // Input Default 값
  const defaultInputSize: InputType = {
    width: "320px",
    height: "40px",
    placeHolder: ""
  };

  // 기본 값과 info props를 병합하여 최종 스타일과 플레이스홀더 설정
  const mergedInputSize: InputType = { ...defaultInputSize, ...info };

  // 스타일 객체 생성
  const inputStyle = {
    width: mergedInputSize.width,
    height: mergedInputSize.height,
    backgroundColor: 'lightgray',
    borderRadius: '15px',
    paddingLeft: '30px',
  };

  return (
    <>
      <input
        style={inputStyle} // 동적으로 생성한 스타일 객체를 적용
        placeholder={mergedInputSize.placeHolder}
      />
    </>
  );
};

export default Input;
