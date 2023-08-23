import { WriteImageProps } from '../../Write_Type/Write_Type';
const WriteImageBox: React.FC<WriteImageProps> = ({
  key,
  src,
  alt,
  onClick,
}) => {
  return (
    <img
      key={key}
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="w-[100px] h-[100px] min-w-[100px] min-h-[100px] rounded-[15px] object-cover mx-2"
      onClick={onClick}
    />
  );
};

export default WriteImageBox;
