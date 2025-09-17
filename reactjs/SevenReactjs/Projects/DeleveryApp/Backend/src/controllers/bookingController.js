import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body, customerId: req.user._id });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("customerId", "name email")
      .populate("driverId", "name email");
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = req.body.status || booking.status;
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
