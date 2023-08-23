import SmallTitle from '@/components/Title/SmallTitle';
import Text from '@/components/Text/Text';
import WriteImageBox from './ImageBox/WriteImageBox';
import { ImageArrType } from '../Write_Type/Write_Type';
import ImageBox from '@/components/ImageBox/ImageBox';
import { useEffect, useState } from 'react';
import EmptyImageBox from './ImageBox/EmptyImageBox';

const ChoicePhoto: React.FC<ImageArrType> = ({ setImageArr }) => {
  const [imageSrcList, setImageSrcList]: any = useState([]);
  const numToShow = Math.max(3, imageSrcList.length);
  useEffect(() => {
    console.log(imageSrcList);
  }, [imageSrcList]);

  // 사진 업로드 함수
  const onUpload = (e: any) => {
    const files = e.target.files;
    const newImageSrcList: any = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);

      reader.onload = () => {
        newImageSrcList.push(reader.result || null);

        if (newImageSrcList.length === files.length) {
          setImageSrcList([...imageSrcList, ...newImageSrcList]);
          setImageArr([...imageSrcList, ...newImageSrcList]);
        }
      };
    }
  };

  // 이미지 삭제 함수
  const deleteImage = (index: number) => {
    const updatedImageSrcList = imageSrcList.filter(
      (element: any, i: any) => i !== index
    );
    setImageSrcList(updatedImageSrcList);
    setImageArr(updatedImageSrcList);
  };

  return (
    <div className="mt-4">
      <SmallTitle
        sideComponent={
          <label className="px-[10px] py-[3px] bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex">
            <input
              accept="image/*"
              multiple
              type="file"
              style={{ display: 'none' }} // input 요소 숨기기
              onChange={(e) => onUpload(e)}
            />
            <Text color="darkGray" size="xxs" fontWeight="normal">
              사진 추가하기
            </Text>
          </label>
        }
      >
        사진 첨부하기
      </SmallTitle>
      <div className="w-auto flex flex-nowrap overflow-x-scroll scrollbar-hide mt-3">
        {Array.from({ length: numToShow }).map((_, index) => {
          if (index < imageSrcList.length) {
            const src = imageSrcList[index];
            return (
              <WriteImageBox
                key={index}
                src={src}
                alt={`Uploaded Image ${index}`}
                onClick={() => {
                  deleteImage(index);
                }}
              />
            );
          } else {
            return <EmptyImageBox key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default ChoicePhoto;
