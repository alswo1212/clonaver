import { useState } from "react";
import Img from "@component/common/Img";

const Header = () => {
  const [isVisible, setIsVisible] = useState("header-in");

  return (
    <header className={`${isVisible} fixed top-0 left-0 z-50 w-full`}>
      <div className="relative overflow-hidden h-14 pl-14">
        <a className="absolute top-0 left-0 p-[9px_0_8px_12px]" href="/">
          <span className="relative block bg-[#03cf5d]">
            <Img bgx={-270} bgy={-145} />
          </span>
        </a>
        <form className="m-0 p-0">
          <div className="mr-[15px] pr-18.75">
            <input
              className="relative w-full border-0 outline-[transparent] pt-4.5 pb-4 
              text-[#1e1e23] box-content text-lg font-bold h-5.5 placeholder-gray-400 placeholder:font-medium
              text-"
              type="search"
              placeholder="검색어를 입력해주세요."
            />
          </div>
          <div className="absolute right-2.5 top-0">
            <button>a</button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
