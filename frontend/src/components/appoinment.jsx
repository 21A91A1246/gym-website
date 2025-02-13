import React, { useState } from "react";
import axios from "axios";

const trainers = ["John Doe", "Emma Smith", "David Brown", "Sophia Lee"];
const slots = [
  "6:00 AM - 8:00 AM",
  "10:00 AM - 12:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const GymAppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    slot: "",
    trainer: "",
    notes: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:5000/bookappointment", formData);
      setMessage("Appointment booked successfully!");
      setFormData({ name: "", phone: "", date: "", slot: "", trainer: "", notes: "" });
    } catch (error) {
      setMessage("Failed to book appointment. Try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 mb-5 p-6 min-h  bg-gray-800 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4 text-center text-white">Gym Appointment Booking</h2>
      {message && <p className="text-green-500 mb-4 text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
        <select name="slot" value={formData.slot} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Time Slot</option>
          {slots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
        <select name="trainer" value={formData.trainer} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Trainer</option>
          {trainers.map((trainer, index) => (
            <option key={index} value={trainer}>{trainer}</option>
          ))}
        </select>
        <textarea name="notes" placeholder="Additional Notes (Optional)" value={formData.notes} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Book Appointment</button>
      </form>
    </div>
  );
};

export default GymAppointmentBooking;
