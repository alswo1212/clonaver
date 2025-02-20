import Img from "@component/common/Img";
const SearchBox = ({ full = true }) => {
  return (
    <div
      // className={`relative overflow-hidden h-14 pl-14 bg-[${full ? "#fff" : "linear-gradient(135deg,#03cf5d_0,#03c75a_100%)"}] ${full || "rounded-[27px]"}`}
      className={`relative overflow-hidden h-14 pl-14 bg-[linear-gradient(135deg,#03cf5d_0,#03c75a_100%)] ${full || "rounded-[27px]"}`}
    >
      {full ? (
        <div className="absolute top-[0px] right-[0px] left-[0px] bottom-[0px] bg-[#fff] "></div>
      ) : (
        <div className="absolute top-[1px] right-[1px] left-[1px] bottom-[1px] bg-[#fff] rounded-[29px]"></div>
      )}
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
                outline-none"
            type="search"
            placeholder="검색어를 입력해주세요."
          />
        </div>
        <div className="absolute right-2.5 top-0 z-10">
          <button type="button" className="p-[9px_2px_8px] ">
            <Img bgx={0} bgy={-145} />
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchBox;
