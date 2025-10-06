import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { RiPencilFill } from "react-icons/ri";
import { useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const BookingPage = () => {

    const [bookings,setBookings] = useState([])

    console.log(bookings,"booking")


  const navigate = useNavigate()

  const GotoForm = ()=>{
     navigate("/addform")
  }

  const GotoEditForm = (id)=>{
     navigate("/editform",{state:id})
  }


  useEffect(() => {
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/items");
      console.log("Fetched bookings:", response.data);
      setBookings(response.data.users); // ✅ updates state
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  fetchBookings();
}, []); // ✅ empty dependency array = runs once


  const handleDelete=async(id)=>{

    console.log(id)
    try {
         await axios.delete(`http://localhost:3000/delete/${id}`);
         alert("delete succeefully")
      
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
  }
  

  

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "40px 20px",
      }}
    >
      {/* Hotel Logo and Title */}
      <div className="text-center mb-5">
        <img
          src="https://img.icons8.com/fluency/96/restaurant.png"
          alt="Hotel Logo"
          className="mb-3"
        />
        <h2 className="text-white fw-bold">Hotel Orders / Bookings</h2>
      </div>

      {/* Table Card */}
      <div
        className="card shadow-lg"
        style={{ background: "linear-gradient(135deg, #ffffff, #f3f3f3)" }}
      >
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Food Item</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings?.map((booking, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{booking.name}</td>
                      <td>{booking.phone}</td>
                      <td>{booking.email}</td>
                      <td>{booking.address}</td>
                      <td>{booking.foodItem}</td>
                      <td>{booking.quantity}</td>
                      <td>{booking.orderDate}</td>
                      <td>{booking.orderTime}</td>
                      <td>{booking.payment}</td>
                      {console.log(booking._id)}
                      <td>
                         <RiPencilFill className="text-info" type="button" onClick={()=>{GotoEditForm(booking._id)}} size={25}/>
                      </td>
                      <td>
                        <MdDelete className="text-info" type="button" onClick={()=>{handleDelete(booking._id)}} size={25}/>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-danger fw-bold">
                      No bookings yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        <div className="mt-4 text-center">
            <button className="btn btn-info" onClick={GotoForm}>Add Booking</button>
        </div>
    </div>
  );
};

export default BookingPage;
