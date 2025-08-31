import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ProductPage.css";

const ProductPage = () => {
  const [form, setForm] = useState({
    productName: "",
    quantity: "",
    type: "import",
    category: "", // <-- Add category to state
    description: "",
    contact: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        product_name: form.productName,
        quantity: form.quantity,
        type: form.type,
        category: form.category, // <-- Add category to email
        description: form.description,
        contact: form.contact
      },
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => setSubmitted(true),
      (err) => setError("Failed to send. Please try again.")
    );
  };

  return (
    <div className="product-page">
      <h2>Request Import/Export</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
            min="1"
          />
        </label>
        <label>
          Type:
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>
        </label>
        <label>
          Category:
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="GENERAL TRADING PRODUCTS">GENERAL TRADING PRODUCTS</option>
            <option value="AGRO COMMODITIES">AGRO COMMODITIES</option>
            <option value="FMCG EXPORTERS">FMCG EXPORTERS</option>
            <option value="MACHINERY AND VEHICLE">MACHINERY AND VEHICLE</option>
            <option value="METAL & ALLOYS">METAL & ALLOYS</option>
            <option value="WOOD TRADING">WOOD TRADING</option>
          </select>
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
          />
        </label>
        <label>
          Contact Email/Phone:
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit Request</button>
      </form>
      {submitted && (
        <div className="confirmation">
          <h4>Thank you! Your request has been submitted.</h4>
        </div>
      )}
      {error && (
        <div className="error">
          <h4>{error}</h4>
        </div>
      )}
    </div>
  );
};

export default ProductPage;