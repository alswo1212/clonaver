import { useState } from "react";
import Img from "@component/common/Img";
import SearchBox from "../common/SearchBox";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navList = [
    { w: 15, h: 20, bx: -87, by: -207 },
    { w: 30, h: 20, bx: 0, by: -207 },
    { w: 31, h: 20, bx: -34, by: -184 },
    { w: 45, h: 20, bx: -48, by: -138 },
    { w: 78, h: 20, bx: 0, by: 0 },
    { w: 30, h: 20, bx: -208, by: -184 },
    { w: 31, h: 20, bx: -68, by: -184 },
    { w: 31, h: 20, bx: -157, by: -161 },
    { w: 30, h: 20, bx: -169, by: -184 },
    { w: 41, h: 20, bx: -44, by: -161 },
    { w: 30, h: 20, bx: -208, by: -161 },
    { w: 60, h: 20, bx: 0, by: -92 },
    { w: 46, h: 20, bx: -159, by: -23 },
    { w: 32, h: 20, bx: -88, by: -161 },
    { w: 30, h: 20, bx: -208, by: -69 },
  ];

  return (
    <header
      className={`${isVisible ? "header-in" : "header-out"} fixed top-0 left-0 z-50 w-full`}
    >
      <SearchBox></SearchBox>
      <div className="overflow-hidden border-t-[rgba(0,0,0,.05)] border-solid border-t">
        <nav className="relative h-13 bg-[linear-gradient(to_right,#04ce6d,#03cb87)]">
          <div className="relative z-1 whitespace-nowrap overflow-x-auto overflow-hidden">
            <ul className="min-w-full inline-flex box-border justify-between p-[0_10px]">
              {navList.map((obj) => (
                <li className="relative inline-block">
                  <a className="h-[54px] p-[18px_10px_0] box-border block">
                    <div
                      style={{
                        backgroundImage:
                          "url(https://s.pstatic.net/static/www/m-new/uit/img/sp_nav_3x_91bc853b.png)",
                        backgroundSize: "238px 227px",
                        backgroundRepeat: "no-repeat",
                        width: obj.w,
                        height: obj.h,
                        backgroundPosition: `${obj.bx}px ${obj.by}px`,
                      }}
                    ></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
