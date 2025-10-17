import { useState } from "react";
import styles from "./BookingForm.module.css";

export const CamperBookingForm = () => {
  const [form, setForm] = useState({ name: "", email: "", date: "", comment: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", form);
    setForm({ name: "", email: "", date: "", comment: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Book your campervan now</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Comment" />
      <button type="submit">Send</button>
    </form>
  );
};