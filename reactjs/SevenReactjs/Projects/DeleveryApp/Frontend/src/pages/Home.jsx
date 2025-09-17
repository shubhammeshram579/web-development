import { useEffect, useState } from "react";
import api from "../services/api";
import VehicleCard from "../components/VehicleCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    api.get("/vehicles")
      .then(res => setVehicles(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBook = (vehicle) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/book/${vehicle._id}`, { state: vehicle });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vehicles.map(vehicle => (
          <VehicleCard key={vehicle._id} vehicle={vehicle} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
}
