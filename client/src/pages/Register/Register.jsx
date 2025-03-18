import React, { useState } from "react";
import Header from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Navigace po registraci

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Hesla se neshodují!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.msg); // Registrace úspěšná
        navigate("/login"); // Přesměrování na přihlášení
      } else {
        setError(data.msg || "Chyba při registraci.");
      }
    } catch (error) {
      setError("Chyba připojení k serveru.");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Registrace</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Jméno</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Heslo</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Potvrzení hesla</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-slate-700 text-white">
            Zaregistrovat se
          </Button>
        </form>
        <p className="text-center mt-4">
          Už máte účet? <Link to="/login" className="text-blue-500">Přihlaste se</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
