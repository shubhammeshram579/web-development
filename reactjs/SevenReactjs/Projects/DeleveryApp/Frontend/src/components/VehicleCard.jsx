export default function VehicleCard({ vehicle, onBook }) {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{vehicle.type}</h3>
      <p>Location: {vehicle.location}</p>
      <p>Price: ₹{vehicle.pricePerKm}/km</p>
      <button
        onClick={() => onBook(vehicle)}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Book Now
      </button>
    </div>
  );
}
