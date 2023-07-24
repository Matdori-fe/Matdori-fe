'use client'
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { RecoilRoot } from "recoil";
import Review from "@/components/Review/Review";
import Input from "@/components/Input/Input";
import BigTitle from "@/components/Title/BigTitle";
import SmallTitle from "@/components/Title/SmallTitle";

import Button from '@/components/Button/Button';
import Margin from '@/components/Margin/Margin';
import Text from '@/components/Text/Text';
import { RecoilRoot } from 'recoil';

const Home = () => {
	return (
		<RecoilRoot>    <Review review={{title:"미련한 컴공", content:"이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ", writeDay:"23/04/20 22:22", heartCount:5}}/>
      <Review review={{title:"미련한 컴공", content:"이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ", writeDay:"23/04/20 22:22", heartCount:5}}/>
      <Review review={{title:"미련한 컴공", content:"이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ", writeDay:"23/04/20 22:22", heartCount:5}}/>
      <Input info={{width:"500px",height:"50px",placeHolder:"placeHolder 설정"}}/>
      <BigTitle>컴퓨터공학과의 맛도리</BigTitle>
      <SmallTitle>맛도리에게 추천받기</SmallTitle>
			<div className='w-100 bg-100'>ss</div>
			<div className='w-100 bg-100'>ss</div>
			<div className='w-100 bg-80'>ss</div>
			<div className='w-100 bg-30'>ss</div>
			{/* <div className='w-100 bg-blue'>ss</div> */}
			<Margin height={10} />
			<Text size='xxs' color='30'>
				hi
			</Text>
			<Text fontWeight='bold'>hi</Text>
			<Button
				name={'Hello Tailwind CSS'}
				className={'bg-teal-400 text-white'}
			/>
		</RecoilRoot>
	);
};

export default Home;
