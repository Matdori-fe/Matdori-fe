'use client'
import NavigationBar from "@/components/NavigationBar";
import { RecoilRoot } from "recoil";

const Home = () => {
  return (
    <>
      {/*recoil위치 논의 필요함*/}
      <RecoilRoot><NavigationBar/></RecoilRoot>
        
    </>
  )
}

export default Home;