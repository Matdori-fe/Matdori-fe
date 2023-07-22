// props=> type: redStoreRecommend | whiteStoreRecommend | redMenuRecommend | whiteMenuRecommend
// myLike | myActivity

type ButtonType = "redStoreRecommend" | "whiteStoreRecommend" | "redMenuRecommend" | "whiteMenuRecommend" | "myLike" | "myActivity";


const SmallButtonBar:React.FC<{ type: ButtonType }> = (props) => {
    
    const { type } = props;

    if(type === "redStoreRecommend"){
        return(
            <>
                {/*가게 추천받기 red버전*/}
                <div className="w-[155px] h-[40px] bg-100 rounded-[15px] flex items-center">
                    <img src= {`recommendImg.svg`}/>
                    <p className="font-Bold text-[14px] text-white">가게 추천받기</p>
                </div>
            </>
        )
    }

    if(type === "whiteStoreRecommend"){
        return(
            <>
                 {/*가게 추천받기 white버전*/}
                <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center border-lightgray border-[1px]">
                    <img src= {`recommendImg.svg`}/>
                    <p className="font-Regular text-[12px] text-darkgray">가게 추천받기</p>
                </div>
            </>
        )
    }
    if(type === "redMenuRecommend"){
        return(
            <>
                {/* 메뉴 추천받기 red버전*/}
                <div className="w-[155px] h-[40px] bg-100 rounded-[15px] flex items-center justify-between overflow-hidden">  
                    <p className="font-Bold text-[14px] text-white ml-4">메뉴 추천받기</p>
                    <img src= {`foodBarImg.svg`}/>
                </div>
            </>
        )
    }
    if(type === "whiteMenuRecommend"){
        return(
            <>
                {/*메뉴 추천받기 white버전*/}
                <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightgray border-[1px] overflow-hidden">
                    <p className="font-Regular text-[12px] text-darkgray ml-5">메뉴 추천받기</p>
                    <img src={`foodBarImg.svg`}/>
                </div> 
            </>
        )
    }
    if(type === "myLike"){
        return(
            <>
                 {/*내 좋아요 컴포넌트*/}
                <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightgray border-[1px] px-5">
                    <img src={`heartWoman.svg`} className="h-[36px] mt-1.4"/>
                    <p className="font-Regular text-[12px] text-darkgray">내 좋아요</p>
                </div>  
            </>
        )
    }
    if(type === "myActivity"){
        return(
            <>
                 {/*내 좋아요 컴포넌트*/}
                <div className="w-[155px] h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightgray border-[1px] px-5">
                    <img src={`heartWoman.svg`} className="h-[36px] mt-1.4"/>
                    <p className="font-Regular text-[12px] text-darkgray">내 좋아요</p>
                </div>  
            </>
        )
    }

    return(
    <>
      잘못된 type 입력  
    </>)
}

export default SmallButtonBar;