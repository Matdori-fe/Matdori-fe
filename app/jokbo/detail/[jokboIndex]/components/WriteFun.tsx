'use client';
import axios from 'axios';
import Toast from '@/components/Toast/Toast';

type ReviewWriteType = {
  jokboIndex: number;
  contents: string;
  userIndex: number;
};

type ResponseType = {
  response: number | string | undefined;
};

const WriteFun = async ({
  jokboIndex,
  contents,
  userIndex,
}: ReviewWriteType): Promise<ResponseType> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/jokbos/${jokboIndex}/comment`,
      {
        userIndex: userIndex,
        contents: contents,
      },
      {
        withCredentials: true,
      }
    );
    return { response: response.status };
  } catch (error) {
    return { response: 'error' };
  }
};

export default WriteFun;
