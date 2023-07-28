const Testnomoial = ({ managerSystemArchitecture }) => {
  return (
    <div className="relative rounded-2xl bg-gray box-border w-[551px] h-[272px] text-left text-base text-white font-poppins border-[1px] border-solid border-deeppink">
      {!managerSystemArchitecture && (
        <div className="absolute top-[74.52px] left-[112.04px] hidden w-[242px] h-[23.49px] [transform:_rotate(-0.07deg)] [transform-origin:0_0] opacity-[0.5]">{`Manager, System Architecture `}</div>
      )}
      <div className="absolute top-[137px] left-[20px] tracking-[0.01em] leading-[160%] inline-block w-[508px] h-[94px]">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. placerat.Elit enim sed massa etiam. Mauris eu adipiscing ultrices
        ametodio aenean neque. placerat.
      </div>
      <img
        className="absolute top-[20.04px] left-[17.05px] rounded-[50%] w-[78.01px] h-[76.35px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="absolute top-[72.52px] left-[112.04px] inline-block w-[242px] h-[23.49px] [transform:_rotate(-0.07deg)] [transform-origin:0_0] opacity-[0.5]">{`Manager, System Architecture `}</div>
      <div className="absolute top-[42.18px] left-[112px] text-xl leading-[32px] text-deeppink inline-block w-[158px] h-[31.32px] [transform:_rotate(-0.07deg)] [transform-origin:0_0]">
        Herman Jensen
      </div>
      <img
        className="absolute top-[35px] left-[287.03px] w-[40.78px] h-[27.06px]"
        alt=""
        src="/1.svg"
      />
    </div>
  );
};

export default Testnomoial;
