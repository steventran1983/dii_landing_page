import Navbar from "../components/Navbar";
import DataIntelligenceAndInnovationC from "../components/DataIntelligenceAndInnovationC";
import MeetTram from "../components/MeetTram";
import RapidChangeContainer from "../components/RapidChangeContainer";
import PlatformFilter from "../components/PlatformFilter";
import DataEngineeringContainer from "../components/DataEngineeringContainer";
import ProductCardForm from "../components/ProductCardForm";
import TestimonialsContainer from "../components/TestimonialsContainer";
import Footer from "../components/Footer";

const Desktop3 = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden flex flex-col py-8 px-0 box-border items-center justify-start gap-[99px]">
      <Navbar />
      <DataIntelligenceAndInnovationC />
      <MeetTram />
      <RapidChangeContainer />
      <PlatformFilter />
      <DataEngineeringContainer />
      <ProductCardForm />
      <TestimonialsContainer />
      <Footer />
    </div>
  );
};

export default Desktop3;
