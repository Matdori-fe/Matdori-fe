'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { HiOutlineXMark } from 'react-icons/hi2';
import { FiDownload } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import axios from 'axios';
type ImgUrlListType = {
  imgUrlList: string[];
  galleryOpen: boolean;
  setGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const JokboImageSwiper = async ({
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

          <FiDownload className="text-white text-[20px] cursor-pointer" />
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
