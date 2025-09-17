import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import BookingCard from "../components/BookingCard";
import axios from "axios";

export default function Profile() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user) return;
    // For now, just fetch all bookings (later filter by user)
    api.get(`/bookings/${"68c0912fc639e4f6cd81dbcc"}`, {
      headers: { Authorization: `Bearer ${user.token}` }
    }).then(res => setBookings(res.data ? [res.data] : []))
      .catch(err => console.error(err));
  }, [user]);

  useEffect(() => {

    const fatchBooking = async () => {

      try {

        const respons = await axios.get("")
        
      } catch (error) {
        console.log("somthing api error", error)
        
      }

    }

    fatchBooking()

  },[])

  console.log(bookings)
  console.log(user)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <h2 className="text-xl mb-2">{user?.name}</h2>
      <h3 className="mb-4">{user?.email}</h3>
      <div className="grid grid-cols-1 gap-4">
        {bookings.length > 0 ? bookings.map(b => <BookingCard key={b._id} booking={b} />) : <p>No bookings yet.</p>}
      </div>
    </div>
  );
}
