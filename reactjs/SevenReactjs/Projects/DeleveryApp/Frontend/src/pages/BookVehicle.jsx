import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function BookVehicle() {
  const { state: vehicle } = useLocation();
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [price, setPrice] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      await api.post("/bookings", {
        driverId: vehicle.ownerId,
        pickupLocation: pickup,
        dropLocation: drop,
        price,
      }, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      alert("Booking successful!");
      navigate("/profile");
    } catch (error) {
      alert("Error booking vehicle");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book {vehicle.type}</h1>
      <input placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} className="border p-2 rounded w-full mb-2" />
      <input placeholder="Drop Location" value={drop} onChange={(e) => setDrop(e.target.value)} className="border p-2 rounded w-full mb-2" />
      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded w-full mb-4" />
      <button onClick={handleBooking} className="bg-green-600 text-white p-2 rounded w-full">
        Confirm Booking
      </button>
    </div>
  );
}
