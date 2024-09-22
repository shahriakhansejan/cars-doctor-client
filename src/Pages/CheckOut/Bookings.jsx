import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Table from "./Table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import axios from 'axios';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    // fetch(url, {credentials: 'include'})
    // .then(res => res.json())
    // .then(data => setBookings(data))
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you Sure to delete?");
    if (proceed) {
      fetch(`https://cars-doctor-server-kappa.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
          }
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        });
    }
  };

  const handleConfirmed = (id) => {
    fetch(`https://cars-doctor-server-kappa.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirmed";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  // console.log(bookings);
  return (
    <div className="min-h-screen">
      <h3>Your bookings: {bookings.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          {bookings.map((booking) => (
            <Table
              handleConfirmed={handleConfirmed}
              handleDelete={handleDelete}
              booking={booking}
              key={booking._id}
            ></Table>
          ))}
        </table>
      </div>
    </div>
  );
};

Bookings.propTypes = {};

export default Bookings;
