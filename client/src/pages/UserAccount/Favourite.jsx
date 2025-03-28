import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const token = localStorage.getItem("token");
  const userId = token ? jwtDecode(token).userId : null;

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/users/favourites", {
          headers: { "x-auth-token": token },
        });
        setFavourites(res.data);
      } catch (error) {
        console.error("Chyba při načítání oblíbených uren:", error);
      }
    };

    if (userId && token) {
      fetchFavourites();
    }
  }, [userId, token]);

  const toggleFavourite = async (urnId) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/users/favourites/${urnId}`,
        {},
        { headers: { "x-auth-token": token } }
      );
      setFavourites((prev) => prev.filter((urn) => urn._id !== urnId));
    } catch (error) {
      console.error("Nepodařilo se odebrat z oblíbených:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Oblíbené urny</h2>

        {favourites.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favourites.map((urn) => (
              <div key={urn._id} className="border rounded-lg p-4 shadow-sm relative">
                <button
                  onClick={() => toggleFavourite(urn._id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  title="Odebrat z oblíbených"
                >
                  <Heart fill="currentColor" size={18} />
                </button>
                <Link to={`/urny/${urn._id}`}>
                  <img
                    src={urn.imagePath}
                    alt={urn.name}
                    className="w-full h-40 object-contain mb-3"
                  />
                  <p className="text-center font-medium">{urn.name}</p>
                  <p className="text-center font-semibold text-gray-700">
                    {new Intl.NumberFormat("cs-CZ", {
                      style: "currency",
                      currency: "CZK",
                      minimumFractionDigits: 0,
                    }).format(urn.price)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Nemáš žádné oblíbené urny.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
