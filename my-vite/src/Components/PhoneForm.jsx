import React, { useState } from "react";

const PhoneForm = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // 🔹 Validate when input loses focus
  const handleBlur = () => {
    const phoneRegex = /^[7-9]{10}$/;

    if (!phoneRegex.test(phone)) {
      setError("❌ Please enter a valid 10-digit phone number.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && phone) {
      alert("✅ Phone number is valid!");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Phone Number:
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={handleBlur}   // 👈 validation on blur
          placeholder="Enter phone number"
          style={{
            padding: "8px",
            border: error ? "2px solid red" : "2px solid gray",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "8px 16px",
            background: "#0b59ff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
    </div>
  );
};

export default PhoneForm;
