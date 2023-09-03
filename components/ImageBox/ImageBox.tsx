// 사용방법: url은 필수로 넣어주고 너비나 높이 소,중,대 까지는 구분되어져 있으며, 다른 사이즈를 원하거나 다른 CSS를 원하면 기호에 맞게 tailwind적용 시켜주세요.
//<ImageBox className="tailwindCSS"" url="이미지url"/>

type ImageSize = 'small' | 'medium' | 'large';

type ImageBoxType = {
  url: any;
  size?: ImageSize;
  className?: string;
};

const ImageBox: React.FC<ImageBoxType> = ({ url, size, className }) => {
  // if (url === null) {
  //   url = '/logo.svg';
  // }
  //size없이 테일 원드로 크기 지정할 경우
  if (!size) {
    return (
      <>
        <img
          src={url}
          className={`rounded-[15px] object-cover border-[1px] border-lightGray ${className}`}
        />
      </>
    );
  } else if (size === 'small') {
    return (
      <>
        <img
          src={url}
          className={`w-[60px] min-w-[60px] h-[60px] min-h-[60px] rounded-[15px] object-cover border-[1px] border-lightGray ${className}`}
        />
      </>
    );
  } else if (size === 'medium') {
    return (
      <>
        <img
          src={url}
          className={`w-[75px] min-w-[75px] h-[75px] min-h-[75px] rounded-[15px] object-cover border-[1px] border-lightGray ${className}`}
        />
      </>
    );
  } else if (size === 'large') {
    return (
      <>
        <img
          src={url}
          className={`w-[100px] min-w-[100px] h-[100px] min-h-[100px] rounded-[15px] object-cover border-[1px] border-lightGray ${className}`}
        />
      </>
    );
  }
};

export default ImageBox;
