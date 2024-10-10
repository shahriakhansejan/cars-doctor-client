import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import calendar from "../../../assets/icons/calendar.png";
import location from "../../../assets/icons/location.png";
import call from "../../../assets/icons/call.png";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Service = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // fetch("https://cars-doctor-server-kappa.vercel.app/services")
    //   .then((res) => res.json())
    //   .then((data) => setServices(data));
    axiosSecure
      .get(`/services?sort=${asc ? "asc" : "des"}&search=${search}`)
      .then((res) => setServices(res.data));
  }, [axiosSecure, asc, search]);
  console.log(services);
  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    console.log(search);
    setSearch(search);
  };

  return (
    <div className="my-10">
      <div className="text-center">
        <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
        <h1 className="text-5xl font-bold my-5 text-[#151515]">
          Our Service Area
        </h1>
        <p className="text-[#737373] w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
        <div className="flex justify-between">
          <form onSubmit={handleSearch} className="join">
            <input
              name="search"
              className="input input-bordered join-item"
              placeholder="Search here....."
            />
            <input
              className="btn btn-secondary join-item rounded-r-full"
              type="submit"
              value="Search"
            />
          </form>
          <button onClick={() => setAsc(!asc)} className="btn btn-secondary">
            {asc ? "Price: High to Low" : "Price: Low to High"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 my-12 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <button className="border-[#FF3811] font-semibold text-lg rounded border text-[#FF3811] hover:bg-[#FF3811] hover:text-white px-3 py-2">
          More Services
        </button>
      </div>
      <div className="bg-[#151515] mt-32 flex flex-col gap-10 py-24 px-12 lg:flex-row justify-between text-white rounded-lg">
        <div className="flex gap-5">
          <img src={calendar} alt="" />
          <span>
            <p className="font-medium">We are open Sunday-Thursday</p>
            <h2 className="text-2xl font-bold">7:00am - 9:00pm</h2>
          </span>
        </div>
        <div className="flex gap-5">
          <img src={call} alt="" />
          <span>
            <p className="font-medium">Have any question?</p>
            <h2 className="text-2xl font-bold">+880 1516-538996</h2>
          </span>
        </div>
        <div className="flex gap-5">
          <img src={location} alt="" />
          <span>
            <p className="font-medium">Have a repair?</p>
            <h2 className="text-2xl font-bold">Gulsan-1, Dhaka-1212</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {};

export default Service;
