import Vehicle from "../models/Vehicle.js";

export const addVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create({ ...req.body, ownerId: req.user._id });
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ availability: true });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
