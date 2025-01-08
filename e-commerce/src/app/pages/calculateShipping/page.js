import CalcShipLeft from "./components/CalcShipLeft";
import CalcShipRight from "./components/CalcShipRight";

export default function CalcShipping() {
  return (
    <div className="container mx-auto p-4  max-w-[1180px] flex justify-center items-center ">
      <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6">
        {/* Left Section */}
        <CalcShipLeft />

        {/* Right Section */}
        <CalcShipRight />
      </div>
    </div>
  );
}
