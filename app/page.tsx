'use client'
import NavigationBar from "@/components/NavigationBar";
import { RecoilRoot } from "recoil";
import Review from "@/components/Review";

const Home = () => {
  return (
    <>
      {/*recoil위치 논의 필요함*/}
      <RecoilRoot><NavigationBar/></RecoilRoot>
      <Review review={{title:"미련한 컴공", content:"이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ", writeDay:"23/04/20 22:22", heartCount:5}}/>
      <Review review={{title:"미련한 컴공", content:"이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ", writeDay:"23/04/20 22:22", heartCount:5}}/>
      <Review review={{title:"미련한 컴공", content:"이건 댓글. 니가 뭔데 가메이를 혼자 알려고 함? ㅋㅋㅋ", writeDay:"23/04/20 22:22", heartCount:5}}/>
    </>
  )
}

export default Home;