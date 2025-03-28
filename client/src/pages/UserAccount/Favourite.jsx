import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";


export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}`, { headers: { 'x-auth-token': token } });
        setName(res.data.name || "");
        setEmail(res.data.email || "");
      } catch (error) {
        console.error("Chyba při načítání profilu", error);
        setName("");
        setEmail("");
      }
    };
  
    fetchProfile();
  }, [userId, token]);
  
  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6">Oblíbené urny</h2>
        {favourites.length > 0 ? (
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {favourites.map(urn => (
              <li key={urn._id} className="border rounded p-4">
                <img src={urn.imagePath} alt={urn.name} className="mb-2" />
                <p>{urn.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nemáš žádné oblíbené urny.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
