import React, { useState } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

const AddCard = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:8000/api/cards/add", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to add card. Please try again.");
    }
  };

  return (
    <div style={{marginTop:"200px",minHeight:"80vh"}} className="container">
      <h1 className="text-center mb-4">Add Card</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter card title"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter card description"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;

