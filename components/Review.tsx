import {RiHeartFill, RiHeartLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import { useState } from 'react'


// 사용 방법 : <Review review={{title:"미련한 컴공", content:"이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ", writeDay:"23/04/20 22:22", heartCount:5}}/>

type ReviewType = {
    title:string,
    content:string,
    writeDay: string,
    heartCount: number;
}

const Review:React.FC<{review: ReviewType}> = (props) =>{

    //내가 하트를 눌렀는지 안눌렀는지에 대한 state
    const[myHeart, setMyHeart] = useState<boolean>(false);


    const {review} = props;

    return(
    <>
         <div className="w-full h-[73.89px] border-b-[1.5px] border-lightgray mt-[13px]">
            <div className='flex items-center justify-between'>
                <p className="font-SemiBold text-[14px]">{review.title}</p>
                <div className='flex'>
                    {myHeart===false? 
                    <RiHeartLine className='w-[12px] h-[12px] text-100' onClick={()=>setMyHeart(true)}/>
                    :<RiHeartFill className='w-[12px] h-[12px] text-100' onClick={()=>setMyHeart(false)}/>}
                    <FiMoreVertical className='w-[12px] h-[12px] ml-[5px]'/>
                </div>
            </div>
            <p className="font-Regular text-[12px] color-darkgray mt-[5px] mb-[3px]">{review.content} </p>
            <div className='flex items-center'>
                <p className='font-Regular text-[10px] color-gray mr-[7px]'>{review.writeDay}</p>
                <RiHeartFill className='w-[12px] h-[12px] text-100'/>
                <p className='font-Regular text-[10px] text-100 ml-[3px]'>{review.heartCount}</p>
            </div>
         </div>


    </>)
}

export default Review;