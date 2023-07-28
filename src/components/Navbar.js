const Navbar = () => {
  return (
    <div className="w-[438px] h-[52px] flex flex-row items-center justify-start gap-[14px] text-left text-xl text-snow font-poppins">
      <img
        className="relative w-[52px] h-[52px] object-cover"
        alt=""
        src="/tmobile-logo-2022-1@2x.png"
      />
      <div className="w-[371px] h-[30.18px] flex flex-row items-center justify-start gap-[22px]">
        <div className="relative leading-[27.5px] inline-block w-[60px] h-[30.01px] shrink-0">
          About
        </div>
        <div className="relative leading-[27.5px] inline-block w-[85px] h-[30.01px] shrink-0">
          Platform
        </div>
        <div className="relative leading-[27.5px] inline-block w-[78px] h-[30.01px] shrink-0">
          Product
        </div>
        <div className="relative leading-[27.5px] inline-block w-[82px] h-[30.01px] shrink-0">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
