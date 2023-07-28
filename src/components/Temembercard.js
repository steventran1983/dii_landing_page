const Temembercard = () => {
  return (
    <div className="relative rounded-6xl bg-lightgray shadow-[0px_0px_4px_#000] box-border w-[270px] h-[195px] text-left text-base text-white font-poppins border-[1px] border-solid border-black">
      <b className="absolute top-[39px] left-[98px] text-xl leading-[105.9%] inline-block text-deeppink w-[165px] h-6">
        Sonali Chandra
      </b>
      <div className="absolute top-[74px] left-[98px] leading-[105.9%] inline-block w-[147px] h-6">
        Software Engineer
      </div>
      <img
        className="absolute h-[41.59%] w-[29.63%] top-[14.07%] right-[65.93%] bottom-[44.34%] left-[4.44%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/fb-img-1650494760221-11@2x.png"
      />
      <div className="absolute top-[124px] left-[20px] rounded-3xs bg-deeppink w-[135px] h-[42px]" />
      <i className="absolute top-[137px] left-[40px] leading-[105.9%]">
        Read More ...
      </i>
    </div>
  );
};

export default Temembercard;
