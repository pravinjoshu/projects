import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddForm = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,watch
  } = useForm({ mode: "onChange" });

  console.log(watch("orderTime"))

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:3000/add-items",
        data
      );
      console.log(response.data);
      alert("Order placed successfully!");
      reset();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
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
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              maxLength={10} 
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone must be exactly 10 digits",
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
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
              className={`form-control ${errors.orderDate ? "is-invalid" : ""}`}
              {...register("orderDate", { required: "Date is required" })}
              min={new Date().toISOString().split("T")[0]} 
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
              {...register("orderTime", { required: "Time is required" })}
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
              {...register("payment", { required: "Select a payment method" })}
            >
              <option value="">Choose...</option>
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Credit Card</option>
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
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
