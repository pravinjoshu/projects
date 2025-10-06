import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const EditForm = () => {
  const [item, setItem] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state;

  const Gotobooking = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/item/${id}`);
        setItem(response.data.msg);
        console.log("Fetched item:", response.data.msg);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
  mode: "onChange",
  defaultValues: item // 👈 prefill form with fetched item
});

// When item is fetched:
useEffect(() => {
  if(item) {
    Object.keys(item).forEach(key => setValue(key, item[key]));
  }
}, [item, setValue]);


  const onSubmit = async (data) => {
  // Create an object containing only changed fields
  const updatedFields = {};
  Object.keys(data).forEach(key => {
    if (data[key] !== item[key]) updatedFields[key] = data[key];
  });

  try {
    const response = await axios.put(`http://localhost:3000/item/${id}`, updatedFields);
    console.log(response.data);
    alert("Update successful!");
    reset();
    navigate('/');
  } catch (err) {
    console.error(err);
  }
};


  const getMinTime = () => {
    const today = new Date().toISOString().split("T")[0];
    if (selectedDate === today) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    }
    return "00:00"; // for future dates, any time allowed
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        className="text-center p-4 shadow-lg rounded-4"
        style={{
          maxWidth: "650px",
          width: "100%",
          background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
        }}
      >
        {/* Logo */}
        <img
          src="https://img.icons8.com/fluency/96/restaurant.png"
          alt="Hotel Logo"
          className="mb-3"
        />
        <h3 className="mb-4 fw-bold text-primary">Hotel Online Food Order</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="row g-3 text-start">
          {/* Name */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Customer Name</label>
            <input
              type="text"
              defaultValue={item?.name}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 15,
                  message: "Max 15 letters allowed",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters allowed",
                },
              })}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="text"
              defaultValue={item?.phone}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              maxLength={10} // 👈 prevents more than 10 digits
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone must be exactly 10 digits",
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // 👈 remove non-numbers
              }}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </div>

          {/* Email */}
          <div className="col-md-12">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              defaultValue={item?.email}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter valid email",
                },
              })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>

          {/* Address */}
          <div className="col-md-12">
            <label className="form-label fw-semibold">Delivery Address</label>
            <textarea
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              defaultValue={item?.address}
              rows="2"
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 5,
                  message: "Address too short",
                },
              })}
            ></textarea>
            {errors.address && (
              <small className="text-danger">{errors.address.message}</small>
            )}
          </div>

          {/* Food Item */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Food Item</label>
            <input
              type="text"
              defaultValue={item?.foodItem}
              className={`form-control ${errors.foodItem ? "is-invalid" : ""}`}
              {...register("foodItem", {
                required: "Food Item is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters allowed",
                },
              })}
            />
            {errors.foodItem && (
              <small className="text-danger">{errors.foodItem.message}</small>
            )}
          </div>

          {/* Quantity */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Quantity</label>
            <input
              type="number"
              defaultValue={item?.quantity}
              className={`form-control ${errors.quantity ? "is-invalid" : ""}`}
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Minimum 1 item" },
                max: { value: 99, message: "Max 99 items only" },
              })}
            />
            {errors.quantity && (
              <small className="text-danger">{errors.quantity.message}</small>
            )}
          </div>

          {/* Order Date */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Order Date</label>
            <input
              type="date"
              defaultValue={item?.orderDate}
              className={`form-control ${errors.orderDate ? "is-invalid" : ""}`}
              {...register("orderDate", { required: "Date is required" })}
              min={new Date().toISOString().split("T")[0]} // today or future
            />
            {errors.orderDate && (
              <small className="text-danger">{errors.orderDate.message}</small>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Delivery Time</label>
            <input
              type="time"
              className={`form-control ${errors.orderTime ? "is-invalid" : ""}`}
              defaultValue={item.orderTime } // 👈 pre-fill saved time or min time
              {...register("orderTime", { required: "Time is required" })}
              min={getMinTime()} // keeps future time restriction
            />
            {errors.orderTime && (
              <small className="text-danger">{errors.orderTime.message}</small>
            )}
          </div>

          {/* Payment */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Payment Method</label>
            <select
              className={`form-select ${errors.payment ? "is-invalid" : ""}`}
              defaultValue={item?.payment || ""} // 👈 fallback to empty string
              {...register("payment", { required: "Select a payment method" })}
            >
              <option value="">Choose...</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Credit Card">Credit Card</option>
            </select>
            {errors.payment && (
              <small className="text-danger">{errors.payment.message}</small>
            )}
          </div>

          {/* Notes */}
          <div className="col-md-12">
            <label className="form-label fw-semibold">Special Notes</label>
            <input
              type="text"
              defaultValue={item?.notes}
              className={`form-control ${errors.notes ? "is-invalid" : ""}`}
              {...register("notes", {
                maxLength: {
                  value: 50,
                  message: "Max 50 characters allowed",
                },
              })}
            />
            {errors.notes && (
              <small className="text-danger">{errors.notes.message}</small>
            )}
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn w-100 fw-bold text-white"
              style={{
                background: "linear-gradient(90deg, #00c6ff, #0072ff)",
              }}
            >
              Update Order
            </button>
          </div>
          <div className="col-12">
            <button
              type="button"
              className="btn w-100 fw-bold text-white"
              style={{
                background: "linear-gradient(90deg, #00c6ff, #0072ff)",
              }}
              onClick={Gotobooking}
            >
              Cancel Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
