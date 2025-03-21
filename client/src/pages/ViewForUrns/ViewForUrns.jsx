import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Přidáno useNavigate
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUrn } from "@/models/Urn";
import moment from "moment";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ViewForUrns() {
  const [urn, setUrn] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Inicializace navigace

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
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {urn.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Cena:{" "}
              <span className="font-semibold text-gray-700 dark:text-white">
                {new Intl.NumberFormat("cs-CZ", {
                  style: "currency",
                  currency: "CZK",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(urn.price)}
              </span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Typ: <span className="font-semibold">{urn.material}</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Barva: <span className="font-semibold">{urn.color}</span>
            </p>

            <img
              src={urn.imagePath}
              alt={urn.name}
              className="w-full max-w-md mx-auto h-auto object-contain rounded-lg"
            />

            <div className="bg-gray-300 dark:bg-gray-600 h-[1px] w-full my-6" />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {urn.description}
            </p>

            <div className="flex justify-center mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  if (window.history.length <= 2) {
                    // Pokud má prohlížeč "krátkou" historii, rovnou zpět na katalog
                    navigate("/urnspanel");
                  } else {
                    // Jinak klasické "zpět"
                    navigate(-1);
                  }
                }}
              >
                Zpět na katalog
              </Button>
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
