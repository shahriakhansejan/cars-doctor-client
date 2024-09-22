import PropTypes from "prop-types";

const Table = ({ booking, handleDelete, handleConfirmed }) => {
  const { _id, img, serviceName, date, price, status } = booking;

  return (
    <tbody>
      <tr>
        <th>
          <label>
            <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm">X</button>
          </label>
        </th>
        <td>
          <div className="mask mask-squircle w-32">
            <img src={img} alt="" />
          </div>
        </td>
        <td>
          <div>
            <div className="text-xl font-bold">{serviceName}</div>
          </div>
        </td>
        <td>
          <h2 className="text-lg font-bold">{date}</h2>
        </td>
        <td className="text-lg font-bold">${price}</td>
        <th>
          {
            status === 'confirmed'? <span className="text-green-600 font-bold">Confirmed</span>
            :
            <button onClick={() => handleConfirmed(_id)} className="btn btn-ghost btn-sm">confirm</button>
          }
        </th>
      </tr>
    </tbody>
  );
};

Table.propTypes = {
  booking: PropTypes.object,
  handleConfirmed: PropTypes.func,
  handleDelete: PropTypes.func
};

export default Table;
