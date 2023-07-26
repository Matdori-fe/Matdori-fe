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
import SmallButtonBar from "@/components/Button/SmallButton";
import HorizonBar from "@/components/HorizonBar/HorizonBar";
import ImageBox from "@/components/ImageBox/ImageBox";
import JokboInfo from "@/components/JokboInfo/JokboInfo";


const Home = () => {
	return (
	<>
		{/*작은 버튼 바*/}
		<SmallButtonBar type="redStoreRecommend"/>
		<SmallButtonBar type="redMenuRecommend"/>

		{/*내비게이션 바*/}
		<NavigationBar/>

		{/*댓글*/}
		<Review
			title="미련한 컴공"
			content="이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ"
			writeDay="23/04/20 22:22"
			heartCount={5}
		/>
		
		{/*Input컴포넌트*/}
        <Input width="400px" height="40px" placeHolder="뭐 좀 입력해봐"/>

		{/*Title 컴포넌트 */}
		<BigTitle>컴퓨터공학과의 맛도리</BigTitle>
      	<SmallTitle>맛도리에게 추천받기</SmallTitle>
	  
	    {/*Image컴포넌트 */}
	    <ImageBox className="w-[100px] h-[100px]" url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAnFBMVEUDx1r///8AxlcAwU+DzZr8/PwArzFhxn/w+PLW6tzo9OuEzpb1+vcRtkoauFhBvW0AuULf8OTQ6dhmwX6z3LxJwHIAvlFLwW8Uu1dSwnl5ypRAw2+03cGk1bSo27fU7t+a06yT0abC5M0yxGZdyn54zZAAqiNzun0jr0gark8PoDI7uWQyu2A1tld20ZpSynhtwYZevHM5pkyIyJksFD+nAAAFT0lEQVR4nO2aa5eiOBCGSYWbDCAXjQERBdvZnoXecdb//9+2EsBue+zLnLNnyJxTz4duFT88xuJNJdGyCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOJ/A/g9YG6tTwDHB+8OD3xusY/hpzS4Q+bOLfYx/EvI7hC8Vgd4//kMfKyuJeG4HR4PWLA9zmV85UN1qSWTw2KLH2G70Rwtd1HJucf9I3UoslqieuWsOWz3QYoE1dENF7Eh6iGC/xw/9J1bdc9vlfoqRPXYvhx8v2lO8qufmaL+1+PTY8vY7lv89+LVqAdXdTUJdItFz+PuW2iMes4t3qesFuC+pb4UAt9eBEEnauYwk9Qx4sNaWK/V81HdqWqPg0Trqt+ccqNG3QJR/azOG+Y/AaqzNLWTeBVWO9Z2iUG1rtQF3/4jX6knhR+yNgEsmLyTywWrZHRxFt+/mjTq8N0TSuZGXaxDPz+wWqpa5zwP7IiD8GzpmqTOi8xTPdeNeh74ZxGtWBXrhBFH8eBJi3PLoFzHUV8HmZogX6rLA5oDyCrrtDo+bFM1q1pJqyaqeXke9U3KmghuwhG2uoiwgRlz3ZKtv9GjLcWs2opR/RzHRcr8PO4f9y8KZuwPASb1uA26ZGDuepnU0/0+xQfBfr8P7zW9z+pOu9LU27ndP9mvJ3W6VKqyTkeyhz9EHfrNcFsKOTF7sf/qKkktM/Sfucf88+oGwr8E/h0Wydxin0DE95h99fYp4C5zWxEEQRDEyHsnG+rY43e6fMStj7Rt+/iGuzg19ub3SH0CSNxlfu7cadUGne+Ey0kdgCf8uTeIMubYhgw7iGWrW11n16kFBLYwXcgmdRB9YR/ypZxso4U56tL29T61WqPmwjpu+/7HVV1sm1R/rvY0tpMGqYszmqerw6EKGFusRanW2M6ozscvBPGbYU1njjrIDI0LXG3GJ3Svk8NgqtVBrvBhdrjs8OP5uRY2SL1HqR8qCoGXuLTrG6aPOLQ6L9B8Fwshllg2envMIHV+xjoeNhChQ6sicV3337HWEyyXNtKVk+NLetgNUrfRbshw6DH3CrXVPiWM66OmLnGIsa4atWQ1V32Nc1PyNKljBeVDsMgd3giuumiMOmA5p73W4+sAjdfNxT4MCQMxXisGddFgsdv2xb4ExqjHGB62mi65rDBr4oY5jjPcptDdqqsr6poh6pY4qHm06HsP78nQThrnmjCv1dUVdc0UdejVrBOkga8+ghTbsiwv4V317IzXSmMKBkt8W/vjfl2jUhJTfEwYiG7VVy4IYU7CIFw81G2atZe1GFuuKRy/PieMUAmD4QhGqav2MJIyEnza/Ooc5ky5fhlyvd8zdjFrSroCXMhus95sNr2MyoutZv0Eh3ofq0kqKfGL8MxUB1E0baDCz1+syl4MY11gnuzwifSwNWv18YBx6nA8BHq5EapflThtPnS4AicnllV1izdy4OnXjFOXNTr67e5iN9VeLzq0HfTVtV//Ylq/PsDPWBltITEYuYhLHOMs1hcgLvVJarjyxtMj09QFDm4WjUKQFJgw62ltKrv87MViOvcyTT3CGfVwPZSDGEe6uO4BqF+gvtgRMFH9eoAET8FL9VdvNUxdrFTrO7qDe2HXgvkJ09TBU+lXfsP7NHrscSJiq7eOwkxTt0SpYj3MqqpNdbAv3zBX6swodRCnzJ8i3EkP3ZsH6aL1g9IkdbVBd6rbRRqkbdUU8m03UeT5/L/ovQV78bjfrLe9FO8enJp5rkoHvgRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB/AH8B2bCYmhamDX3AAAAAElFTkSuQmCC"/>

		{/*HorizonBar바*/}
	    <HorizonBar className="border-t-[2px] mx-[10px]"/>
      
		
		{/* 족보 정보 컴포넌트 "bookMark" | "starScore" | "heartScore" | "chatScore"; */}
		<JokboInfo kind="bookMark" count={12.5}/>
		<JokboInfo kind="starScore" count={12.5}/>
		<JokboInfo kind="heartScore" count={12.5}/>
		<JokboInfo kind="chatScore" count={12.5}/>

			
		</>
	);
};

export default Home;
