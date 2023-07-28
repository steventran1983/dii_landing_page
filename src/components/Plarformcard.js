const Plarformcard = () => {
  return (
    <div className="relative rounded-2xl bg-gray box-border w-[270px] h-[342px] text-left text-base text-white font-poppins border-[1px] border-solid border-deeppink">
      <div className="absolute top-[115px] left-[calc(50%_-_113px)] text-5xl tracking-[0.01em] leading-[160%] font-semibold text-deeppink [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">{`Platform 01 `}</div>
      <div className="absolute top-[157px] left-[19px] tracking-[0.01em] leading-[160%] inline-block w-60 h-[94px]">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. placerat.
      </div>
      <div className="absolute top-[283px] left-[15px] rounded-3xs bg-deeppink w-[133px] h-9 flex flex-col items-center justify-center text-center">
        <i className="relative leading-[105.9%] inline-block w-[101px] h-3.5 shrink-0">
          Read More ...
        </i>
      </div>
      <img
        className="absolute h-[27.49%] w-[34.81%] top-[6.14%] right-[56.67%] bottom-[66.37%] left-[8.52%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/quantum-logo-6@2x.png"
      />
    </div>
  );
};

export default Plarformcard;
