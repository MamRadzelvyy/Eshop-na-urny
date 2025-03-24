import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUrn } from "@/models/Urn";
import moment from "moment";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ViewForUrns() {
  const [urn, setUrn] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Mapa pro přesměrování na správné typy uren
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
    loadUrn();
  }, [id]);

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
              {/* Obrázek */}
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <img
                  src={urn.imagePath}
                  alt={urn.name}
                  className="w-60 h-60 object-contain rounded-lg"
                />
              </div>

              {/* Text a tlačítka */}
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {urn.name}
                  </h1>

                  <p className="text-green-700 dark:text-green-400 text-2xl font-bold mb-2">
                    {new Intl.NumberFormat("cs-CZ", {
                      style: "currency",
                      currency: "CZK",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(urn.price)}
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Typ:{" "}
                    {materialRoutes[urn.material] ? (
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
                    onClick={() => {
                      if (window.history.length <= 2) {
                        navigate("/urnspanel");
                      } else {
                        navigate(-1);
                      }
                    }}
                  >
                    Zpět na katalog
                  </Button>
                  <Button className="px-4 py-3 bg-green-200 text-green-900 hover:bg-green-300">
                    <ShoppingCart className="w-5 h-5" />
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
