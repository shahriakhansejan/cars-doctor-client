import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full flex object-cover items-center rounded-lg" />

        <BannerText></BannerText>

        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide6"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] mr-4 btn-circle"
          >
            <FaArrowLeft />{" "}
          </a>
          <a
            href="#slide2"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <BannerText></BannerText>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide1"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] mr-4 btn-circle"
          >
            <FaArrowLeft />{" "}
          </a>
          <a
            href="#slide3"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <BannerText></BannerText>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide2"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] mr-4 btn-circle"
          >
            <FaArrowLeft />{" "}
          </a>
          <a
            href="#slide4"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <BannerText></BannerText>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide3"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] mr-4 btn-circle"
          >
            <FaArrowLeft />{" "}
          </a>
          <a
            href="#slide5"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <BannerText></BannerText>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide4"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] mr-4 btn-circle"
          >
            <FaArrowLeft />{" "}
          </a>
          <a
            href="#slide6"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <BannerText></BannerText>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide5"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] mr-4 btn-circle"
          >
            <FaArrowLeft />{" "}
          </a>
          <a
            href="#slide1"
            className="btn bg-black/50 text-white border-none hover:bg-[#FF3811] btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
