import Text from "@/components/Text/Text";
import Link from "next/link";
import StarRate from "@/components/StarRate/StarRate";
import JokboInfo from "@/components/JokboInfo/JokboInfo";
import ImageBox from "@/components/ImageBox/ImageBox";
import HorizonBar from "@/components/HorizonBar/HorizonBar";
import { url } from "inspector";

type JokboInfo = {
  jokboId: number;
  title: string;
  contents: string;
  imgUrl: string;
  starScore: number;
  favoriteCnt: number;
  commentCnt: number;
};

const JokboBox = ({
  jokboId,
  title,
  contents,
  imgUrl,
  starScore,
  favoriteCnt,
  commentCnt,
}: JokboInfo) => {
  return (
    <>
      <div className="mt-2 mx-4">
        <HorizonBar className="mb-3" />
        <div className="flex justify-between items-center">
          <div className="w-10/16 mr-4">
            <Text
              size="sm"
              fontWeight="semibold"
              color="black"
              className="line-clamp-1"
            >
              {title}
            </Text>
            <StarRate score={4.8} />
            <div className="w-full h-0.5" />
            <Text
              size="xs"
              fontWeight="normal"
              color="darkGray"
              className="line-clamp-1"
            >
              {contents}
            </Text>
            <div className="flex mt-0.5">
              <JokboInfo
                kind="heartScore"
                count={favoriteCnt}
                className="mr-2"
              />
              <JokboInfo kind="chatScore" count={commentCnt} />
            </div>
          </div>
          <ImageBox size="medium" url={imgUrl} />
        </div>
      </div>
    </>
  );
};

export default JokboBox;
