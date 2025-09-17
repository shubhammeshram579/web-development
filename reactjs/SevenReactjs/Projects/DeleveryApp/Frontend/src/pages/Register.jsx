import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "customer",
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 rounded" />
        <select name="role" onChange={handleChange} className="border p-2 rounded">
          <option value="customer">Customer</option>
          <option value="driver">Driver</option>
        </select>
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
