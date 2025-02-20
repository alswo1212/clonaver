import { useState } from "react";
import "./App.css";
import Header from "@component/semantic/Header";
import Footer from "@component/semantic/Footer";
import SearchBox from "@component/common/SearchBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <div className="w-screen h-screen">
        <div className="relative z-0 pt-[120px] min-h-[303px] box-border">
          {/* 검색란 */}
          <div className="relative p-[0_20px] m-[0_auto] max-w-[568px]">
            <SearchBox full={false}></SearchBox>
          </div>
          {/* 카테고리 아이콘 */}
          <div className="m-[0_auto] smh:pt-5 smh:pb-9"></div>
          {/* 홍 상단 아이콘 */}
          <div></div>
        </div>
        {/* AD 자리 */}
        <div className="relative overflow-visible max-h-[140px] h-[calc(14000vw/375)] m-[0_8px] flex justify-center">
          <img
            className="h-[100px] absolute bottom-0"
            src="https://naverpa-phinf.pstatic.net/MjAyNTAyMTBfMjUz/MDAxNzM5MTg0MDcyNDk0.5FlOLaIBV7iFBPNQZa6Hmu_asMrv01s4NYtGKJsQFfUg.eVM-E1L1CRYj6GvXqthn8gPwrVj-9i0cSMjs_5ldcUkg.PNG/SP500__%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%B1%84%EB%84%90%28750x200%29_173918407247412398946280532505376.png"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
