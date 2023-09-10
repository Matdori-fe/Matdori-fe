'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { HiOutlineXMark } from 'react-icons/hi2';
import { FiDownload } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

type ImgUrlListType = {
  imgUrlList: string[];
  galleryOpen: boolean;
  setGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const JokboImageSwiper = ({
  imgUrlList,
  galleryOpen,
  setGalleryOpen,
}: ImgUrlListType) => {
  const swiperRef = useRef<SwiperCore>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleGalleryClose = () => {
    setGalleryOpen(false);
    setCurrentImageIndex(0);
  };

  const downloadImage = () => {
    const currentImageSrc = imgUrlList[currentImageIndex];

    if (currentImageSrc) {
      // Fetch the image data
      fetch(currentImageSrc)
        .then((response) => response.blob())
        .then((blob) => {
          // Create a blob URL for the image
          const blobUrl = window.URL.createObjectURL(blob);

          // Create an invisible link element
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = `image_${currentImageIndex + 1}.jpg`;
          link.target = '_blank'; // Open in a new tab (optional)
          document.body.appendChild(link);

          // Simulate a click event to trigger the download
          link.click();
          console.log('사진 다운로드');

          // Clean up the link element and blob URL
          document.body.removeChild(link);
          window.URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => {
          console.error('다운로드 에러:', error);
        });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div className="w-full flex flex-wrap absolute top-3 left-0 justify-between px-3">
          <div
            className="text-white cursor-pointer"
            onClick={handleGalleryClose}
          >
            <HiOutlineXMark className="text-[20px]" />
          </div>

          <div className="w-fit font-regular text-24px text-white">
            {`${currentImageIndex + 1} / ${imgUrlList.length}`}
          </div>
          <FiDownload
            className="text-white text-[20px]"
            onClick={downloadImage}
          />
        </div>
        <div className="relative w-[80%] h-[80%] max-w-[800px] max-h-[800px] flex">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            initialSlide={currentImageIndex}
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            onSlideChange={(swiper: any) =>
              setCurrentImageIndex(swiper.activeIndex)
            }
          >
            {imgUrlList?.map((element, i) => (
              <SwiperSlide key={i}>
                <img
                  src={element}
                  alt={`Image ${i + 1}`}
                  className="w-full h-full max-h-[800px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default JokboImageSwiper;
