import React, { useState } from "react";
import "./Form.css";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNo: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.rollNo) tempErrors.rollNo = "Roll No is required";

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", rollNo: "" });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🎓 Student Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error">{errors.name}</span>

          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>

          <input
            type="text"
            name="rollNo"
            placeholder="Enter roll number"
            value={formData.rollNo}
            onChange={handleChange}
          />
          <span className="error">{errors.rollNo}</span>

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div className="result">
            <h3>✅ Submitted Data</h3>
            <p><b>Name:</b> {submittedData.name}</p>
            <p><b>Email:</b> {submittedData.email}</p>
            <p><b>Roll No:</b> {submittedData.rollNo}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormComponent;