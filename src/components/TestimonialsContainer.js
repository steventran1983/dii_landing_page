import Testnomoial from "./Testnomoial";

const TestimonialsContainer = () => {
  return (
    <div className="w-[1125px] h-[489px] flex flex-col items-start justify-start gap-[52px] text-left text-29xl text-white font-poppins">
      <div className="relative leading-[170%] font-semibold inline-block w-[470px]">
        What people are saying about us ...
      </div>
      <div className="box-border w-[1122px] h-[273px] flex flex-row items-center justify-start gap-[20px] text-base border-[1px] border-solid border-black">
        <Testnomoial managerSystemArchitecture={false} />
        <Testnomoial managerSystemArchitecture />
      </div>
    </div>
  );
};

export default TestimonialsContainer;
