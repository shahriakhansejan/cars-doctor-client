const BannerText = () => {
  return (
    <div className="absolute bg-gradient-to-r rounded-lg from-[#151515] to-transparent h-full top-0 left-0 flex items-center">
      <div className="w-1/2 ml-14 text-white">
        <h1 className="text-6xl font-bold">
          Affordable Price For Car Servicing
        </h1>
        <p className="text-lg my-7">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <button className="border-white font-semibold text-lg rounded border text-white hover:bg-[#FF3811] hover:border-[#FF3811] px-3 py-2">
          Discover More
        </button>
        <button className="border-white font-semibold text-lg rounded border text-white hover:bg-[#FF3811] hover:border-[#FF3811] px-3 py-2 ml-4">
          Latest Project
        </button>
      </div>
    </div>
  );
};

BannerText.propTypes = {};

export default BannerText;
