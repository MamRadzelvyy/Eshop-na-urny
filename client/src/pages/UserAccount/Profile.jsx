import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Header from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";


export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const token = localStorage.getItem("token");
  const userId = jwtDecode(token).userId;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/users/${userId}`, { headers: { 'x-auth-token': token } });
        setName(res.data.name || "");
        setEmail(res.data.email || "");
      } catch (error) {
        console.error("Chyba při načítání profilu", error);
      }
    };

    fetchProfile();
  }, [userId, token]);

  const handleUpdate = async () => {
    if (password && password !== confirmPassword) {
      alert("Hesla se neshodují!");
      return;
    }

    try {
      await axios.put(
        `http://localhost:4000/api/users/profile/${userId}`,
        { name, email, ...(password && { password }) },
        { headers: { 'x-auth-token': token } }
      );
      alert('Profil úspěšně aktualizován!');
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Chyba při aktualizaci profilu", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-12 flex justify-center items-center min-h-[70vh]">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Můj Profil</h2>

          <div className="flex flex-col gap-4">
            <input
              className="border border-gray-300 p-3 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jméno"
            />

            <input
              className="border border-gray-300 p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              className="border border-gray-300 p-3 rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nové heslo (nepovinné)"
            />

            <input
              className="border border-gray-300 p-3 rounded"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Potvrď nové heslo"
            />

            <button
              onClick={handleUpdate}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium"
            >
              Uložit změny
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}