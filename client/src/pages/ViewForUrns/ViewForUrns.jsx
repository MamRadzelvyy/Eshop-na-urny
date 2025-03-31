import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUrn } from "@/models/Urn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";


export default function ViewForUrns() {
  const [urn, setUrn] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const materialRoutes = {
    "Betonové urny": "/betonove-urny",
    "Dřevěné urny": "/drevene-urny",
    "Ekologické urny": "/ekologicke-urny",
    "Kamenné urny": "/kamenne-urny",
    "Keramické urny": "/keramicke-urny",
    "Kovové urny": "/kovove-urny",
    "Zvířecí urny S": "/male-zvireci-urny",
    "Zvířecí urny M": "/stredni-zvireci-urny",
    "Zvířecí urny L": "/velke-zvireci-urny",
  };

  useEffect(() => {
    const loadUrn = async () => {
      const urnData = await getUrn(id);
      if (urnData.status === 200) {
        setUrn(urnData.payload);
        setLoaded(true);
      }
    };

    const checkIfFavourite = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:4000/api/users/favourites", {
          headers: { "x-auth-token": token },
        });
        setIsFavourite(res.data.some((item) => item._id === id));
      } catch (err) {
        console.error("Chyba při ověřování oblíbených:", err);
      }
    };

    loadUrn();
    checkIfFavourite();
  }, [id]);

  const toggleFavourite = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Musíš být přihlášen pro přidání do oblíbených.");
      return;
    }

    try {
      await axios.put(`http://localhost:4000/api/users/favourites/${id}`, {}, {
        headers: { "x-auth-token": token },
      });

      setIsFavourite((prev) => !prev);

      if (!isFavourite) {
        toast.success("Urna byla přidána do oblíbených ");
      } else {
        toast.error("Urna byla odebrána z oblíbených ");
      }
    } catch (error) {
      toast.error("Nepodařilo se změnit stav oblíbených.");
      console.error(error);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(urn));
    toast.success("Urna byla přidána do košíku ");
  };

  return (
    <>
      <Header />
      {isLoaded ? (
        <div className="max-w-4xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <img
                  src={urn.imagePath}
                  alt={urn.name}
                  className="w-60 h-60 object-contain rounded-lg"
                />
              </div>

              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                      {urn.name}
                    </h1>
                    <motion.button
                      onClick={toggleFavourite}
                      whileTap={{ scale: 0.9 }}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      {isFavourite ? <Heart className="fill-red-500 w-6 h-6" /> : <Heart className="w-6 h-6" />}
                    </motion.button>
                  </div>

                  <p className="text-green-700 dark:text-green-400 text-2xl font-bold mb-2">
                    {new Intl.NumberFormat("cs-CZ", {
                      style: "currency",
                      currency: "CZK",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(urn.price)}
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Typ: {materialRoutes[urn.material] ? (
                      <Link
                        to={materialRoutes[urn.material]}
                        className="font-semibold text-blue-600 hover:underline"
                      >
                        {urn.material}
                      </Link>
                    ) : (
                      <span className="font-semibold">{urn.material}</span>
                    )}
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Barva: <span className="font-semibold">{urn.color}</span>
                  </p>

                  <div className="bg-gray-300 dark:bg-gray-600 h-[1px] w-full my-6" />

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {urn.description}
                  </p>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.history.length <= 2 ? navigate("/urnspanel") : navigate(-1)
                    }
                  >
                    Zpět na katalog
                  </Button>
                  <Button
                    onClick={handleAddToCart}
                    className="px-4 py-3 bg-green-200 text-green-900 hover:bg-green-300"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" /> Přidat do košíku
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <p className="text-center text-gray-700 dark:text-gray-300 py-10">
          Načítání urny...
        </p>
      )}
      <Footer />
    </>
  );
}
