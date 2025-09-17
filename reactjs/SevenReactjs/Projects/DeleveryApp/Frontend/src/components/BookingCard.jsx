export default function BookingCard({ booking }) {
  return (
    <div className="border rounded-lg shadow p-4">
      <h3 className="font-bold">Booking #{booking._id}</h3>
      <p>Status: {booking.status}</p>
      <p>Pickup: {booking.pickupLocation}</p>
      <p>Drop: {booking.dropLocation}</p>
      <p>Price: ₹{booking.price}</p>
    </div>
  );
}
