import "./App.css";
import Header from "@component/semantic/Header";
import Footer from "@component/semantic/Footer";
import SearchBox from "@component/common/SearchBox";
import Img from "@component/common/Img";

function App() {
  const img1 = { bgx: -163, bgy: -21 };
  const img2 = { bgx: -218, bgy: -21 };

  const mainNavList = [
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/20240926_0/upload_1727340529461tGtV8.png",
      text: "뉴스판",
    },
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/20240926_0/upload_1727340609927a4VUk.png",
      text: "스토어",
    },
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/20240926_0/upload_1727340640840FWUt0.png",
      text: "경제판",
    },
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/20240926_0/upload_1727340671003TqsLB.png",
      text: "클립판",
    },
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/20240926_0/upload_1727340694234hLngf.png",
      text: "메일",
    },
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/20240926_0/upload_1727340716454Pctgy.png",
      text: "카페",
    },
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/20240926_0/upload_1727340486286Jh4lB.png",
      text: "블로그",
    },
    {
      src: "https://s.pstatic.net/static/www/mobile/edit/2021/0427/upload_1619497854375Q53rw.png",
      text: "",
    },
  ];

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
          <div className="m-[0_auto] main-nav-box w-[278px]">
            <ul className="flex flex-wrap m-[-8px_0_0_-26px] list-none p-0">
              {mainNavList.map((obj) => (
                <li className="m-0 p-[8px_0_0_26px]">
                  <a className="w-12.5 m-[0_auto] block text-center">
                    <div className="w-12.5 h-12.5 relative p-[2px_0_4px] box-border text-center">
                      <Img
                        w={"w-12.5"}
                        h={"h-12.5"}
                        etc={"absolute t-0 l-0 r-0 b-0 z-[-1]"}
                        {...img1}
                      ></Img>
                      <Img
                        w={"w-12.5"}
                        h={"h-12.5"}
                        etc={"absolute t-0 l-0 z-[-1] block"}
                        {...img2}
                      ></Img>
                      <img
                        width={44}
                        height={44}
                        src={obj.src}
                        className="inline"
                      />
                    </div>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap block mt-[3px] text-[11px] leading-[15px]">
                      {obj.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 홍 상단 아이콘 */}
          <div className="absolute top-0 bottom-0 right-0 left-0 max-w-[1118px] m-[0_auto] box-border">
            <div className="absolute top-0 left-0 z-20 pl-2.5"></div>
            <div className="absolute top-0 right-0 z-20 pr-2.5"></div>
          </div>
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
