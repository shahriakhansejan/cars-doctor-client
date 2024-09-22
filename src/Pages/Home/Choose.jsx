import { IoTimerSharp } from "react-icons/io5";
import team from "../../assets/icons/group.svg";
import person from "../../assets/icons/person.svg";
import Wrench from "../../assets/icons/Wrench.svg";
import check from "../../assets/icons/check.svg";
import deliveryt from "../../assets/icons/deliveryt.svg";

const Choose = () => {
  return (
    <div className="my-32 text-center">
      <h3 className="text-xl font-bold text-[#FF3811] ">Core Features</h3>
      <h1 className="text-5xl text-[#151515] my-4 font-bold">
      Why Choose Us
      </h1>
      <p className="text-[#737373] w-1/2 mx-auto">
      the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
      </p>
      <div className="flex flex-col w-1/2 mx-auto gap-2 md:w-full md:flex-row mt-8 justify-between">
        <span className="border p-7 hover:border-2 hover:border-[#FF3811] rounded-lg">
          <img className="mx-auto" src={team} alt="" />
          <h3 className="text-lg font-bold text-[#444444]">Expert Team</h3>
        </span>
        <span className="border p-7 hover:border-2 hover:border-[#FF3811] rounded-lg">
          <img className="mx-auto" src={person} alt="" />
          <h3 className="text-lg font-bold text-[#444444]">24/7 Support</h3>
        </span>
        <span className="border p-7 hover:border-2 hover:border-[#FF3811] rounded-lg">
          <img className="mx-auto" src={Wrench} alt="" />
          <h3 className="text-lg font-bold text-[#444444]">Best Equipment</h3>
        </span>
        <span className="border p-7 hover:border-2 hover:border-[#FF3811] rounded-lg">
          <img className="mx-auto" src={check} alt="" />
          <h3 className="text-lg font-bold text-[#444444]">100% Guaranty
          </h3>
        </span>
        <span className="border p-7 hover:border-2 hover:border-[#FF3811] rounded-lg">
          <img className="mx-auto" src={deliveryt} alt="" />
          <h3 className="text-lg font-bold text-[#444444]">Timely Delivery</h3>
        </span>
      </div>
    </div>
  );
};

Choose.propTypes = {};

export default Choose;
