import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { createForm } from "@/models/Form";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postForm();
  };
  const postForm = async () => {
    const contacts = await createForm(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-neutral-200 p-6 rounded-xl shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Jméno</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">E-mail</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Zpráva</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded-md" rows="4" required></textarea>
      </div>
      <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Odeslat zprávu</Button>
      {status && <p className="mt-4 text-center text-green-600">{status}</p>}
    </form>
  );
}
