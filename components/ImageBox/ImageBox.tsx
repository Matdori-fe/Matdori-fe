// 사용방법: url은 필수로 넣어주고 너비나 높이는 기호에 맞게 tailwind적용 시켜주세요.
//<ImageBox className="w-[100px] h-[100px]" url="이미지url"/>


type ImageBoxType = {
    url:string,
    className?:string
}

const ImageBox:React.FC<ImageBoxType> = ({url,className}) =>{
    return(
    <>
        <img src={url} className={`rounded-[15px] object-cover ${className}`}/>
    </>
    )
}

export default ImageBox;