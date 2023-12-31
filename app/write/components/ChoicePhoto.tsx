import SmallTitle from '@/components/Title/SmallTitle';
import Text from '@/components/Text/Text';
import WriteImageBox from './ImageBox/WriteImageBox';
import { ImageArrType } from '../Write_Type/Write_Type';
import { useEffect, useState } from 'react';
import { RiImage2Line } from 'react-icons/ri';
import { BsFillCameraFill } from 'react-icons/bs';
const ChoicePhoto: React.FC<ImageArrType> = ({ setImageArr }) => {
  const [imageSrcList, setImageSrcList]: any = useState([]);
  const numToShow = Math.max(3, imageSrcList.length);

  // 사진 업로드 함수
  const onUpload = (e: any) => {
    e.preventDefault();

    const files = e.target.files;
    const newImageSrcList: any = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      setImageArr((prev: any) => [files[i], ...prev]);
      reader.onload = () => {
        newImageSrcList.push(reader.result || null);
        if (newImageSrcList.length === files.length) {
          setImageSrcList([...newImageSrcList, ...imageSrcList]);
        }
      };
    }
  };

  // 이미지 삭제 함수
  const deleteImage = (index: number) => {
    // 보여줄 이미지 필터
    const updatedImageSrcList = imageSrcList.filter(
      (element: any, i: number) => i !== index
    );
    setImageSrcList(updatedImageSrcList);
    // 백엔드 보낼 이미지 필터
    setImageArr((prev: any) =>
      prev.filter((element: any, i: number) => i !== index)
    );
  };

  return (
    <div className="mt-4">
      <SmallTitle
        sideComponent={
          <label className="px-[10px] py-[3px] bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex">
            <input
              multiple
              type="file"
              style={{ display: 'none' }}
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
      <div className="flex justify-start w-auto mt-3 overflow-x-scroll flex-nowrap scrollbar-hide gap-[10px]">
        <label className="bg-lightGray w-[100px] h-[100px] min-w-[100px] min-h-[100px] rounded-[15px] object-cover flex justify-center items-center">
          <input
            accept="image/*"
            multiple
            type="file"
            style={{ display: 'none' }} // input 요소 숨기기
            onChange={(e) => onUpload(e)}
          />
          <div className="flex flex-wrap justify-center pt-2">
            <BsFillCameraFill className="text-[30px] text-gray" />
            <div className="w-full font-regular text-[14px] text-gray text-center">
              {imageSrcList.length}
            </div>
          </div>
        </label>
        {imageSrcList.map((element: any, idx: number) => {
          return (
            <WriteImageBox
              key={idx}
              src={element}
              alt={`Uploaded Image ${idx}`}
              onClick={() => {
                deleteImage(idx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChoicePhoto;
