'use client';
import { RiShareBoxLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { JokboShareType } from './type/HeaderComponentsType';

declare global {
  interface Window {
    Kakao: any;
  }
}

const JokboShare: React.FC<JokboShareType> = ({
  jokboIndex,
  jokboTitle,
  storeName,
  nickName,
  imageUrl,
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
      let templateArgs;

      if (imageUrl === undefined || imageUrl.length === 0) {
        templateArgs = {
          jokboIndex: jokboIndex,
          jokboTitle: jokboTitle,
          storeName: storeName,
          nickName: nickName,
          imageUrl1: 'https://i.ibb.co/rGFBcps/Frame-59.png',
        };
      } else if (imageUrl.length === 1) {
        templateArgs = {
          jokboIndex: jokboIndex,
          jokboTitle: jokboTitle,
          storeName: storeName,
          nickName: nickName,
          imageUrl1: imageUrl[0],
        };
      } else if (imageUrl.length === 2) {
        templateArgs = {
          jokboIndex: jokboIndex,
          jokboTitle: jokboTitle,
          storeName: storeName,
          nickName: nickName,
          imageUrl1: imageUrl[0],
          imageUrl2: imageUrl[1],
        };
      } else {
        templateArgs = {
          jokboIndex: jokboIndex,
          jokboTitle: jokboTitle,
          storeName: storeName,
          nickName: nickName,
          imageUrl1: imageUrl[0],
          imageUrl2: imageUrl[1],
          imageUrl3: imageUrl[2],
          imgCount: imageUrl.length,
        };
      }

      Kakao.Link.sendScrap({
        requestUrl: location.href,
        templateId: 97782,
        templateArgs: templateArgs,
      });
    }
  };

  const StoreShareBtn = () => <RiShareBoxLine size="20" onClick={onClick} />;

  return <StoreShareBtn />;
};

export default JokboShare;
