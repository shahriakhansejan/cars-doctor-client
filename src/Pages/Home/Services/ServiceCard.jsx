import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, price, img, title} =service;
  return (
    <div className="card card-compact bg-base-100 border p-3 rounded-lg">
      <figure>
        <img className="rounded-lg"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-[#444444]">{title}</h2>
        <div className="card-actions text-xl font-semibold text-[#FF3811] justify-between">
            <h3>Price: ${price}</h3>
          <Link to={`check-out/${_id}`}><button className="hover:text-orange-700"><FaArrowRight /></button></Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object
};

export default ServiceCard;
