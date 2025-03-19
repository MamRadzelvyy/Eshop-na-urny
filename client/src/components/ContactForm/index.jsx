import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { createForm } from "@/models/Form";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createForm(formData);
      setStatus("✅ Zpráva byla úspěšně odeslána!");
      setFormData({ name: "", email: "", message: "" });

      // Skrytí zprávy po 3 sekundách
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      setStatus("❌ Odeslání se nezdařilo. Zkuste to znovu.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-neutral-200 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700"
    >
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">Jméno</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring focus:ring-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring focus:ring-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">Zpráva</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring focus:ring-blue-300"
          rows="4"
          required
        ></textarea>
      </div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          type="submit"
          className="w-full bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 text-white"
        >
          Odeslat zprávu
        </Button>
      </motion.div>

      {/* Úspěšná zpráva pod tlačítkem */}
      {status && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-center font-medium text-green-600 dark:text-green-400"
        >
          {status}
        </motion.p>
      )}
    </motion.form>
  );
}
