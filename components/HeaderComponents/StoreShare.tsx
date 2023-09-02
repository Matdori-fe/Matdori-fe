'use client';
import { RiShareBoxLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { StoreShareType } from './type/HeaderComponentsType';

declare global {
  interface Window {
    Kakao: any;
  }
}

const StoreShare: React.FC<StoreShareType> = ({
  storeIndex,
  imgUrl,
  storeName,
  storeContent,
}) => {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const { Kakao, location } = window;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    script.defer = true;
    script.onload = () => {
      setIsKakaoLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isKakaoLoaded) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, [isKakaoLoaded]);

  const onClick = () => {
    if (isKakaoLoaded) {
      try {
        Kakao.Link.sendScrap({
          requestUrl: location.href,
          templateId: 97765,
          templateArgs: {
            storeIndex: storeIndex,
            imageUrl: imgUrl ? imgUrl : '',
            storeName: storeName,
            storeContent: storeContent,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const StoreShareBtn = () => <RiShareBoxLine size="20" onClick={onClick} />;

  return <StoreShareBtn />;
};

export default StoreShare;
