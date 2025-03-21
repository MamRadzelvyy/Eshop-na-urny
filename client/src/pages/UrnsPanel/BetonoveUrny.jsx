import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getUrns } from "@/models/Urn";

export default function BetonoveUrny() {
  const [urns, setUrns] = useState([]);
  const [sortBy, setSortBy] = useState("bestsellers");

  useEffect(() => {
    const loadUrns = async () => {
      const data = await getUrns();
      if (data.status === 200) {
        const filteredUrns = data.payload.filter((urn) => urn.material === "Betonové urny");
        setUrns(filteredUrns);
      }
    };
    loadUrns();
  }, []);

  const sortedUrns = [...urns].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Betonové urny</h1>

        <div className="flex justify-end mb-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-md shadow-sm"
          >
            <option value="bestsellers">Nejprodávanější</option>
            <option value="price_asc">Cena: Nejnižší</option>
            <option value="price_desc">Cena: Nejvyšší</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedUrns.length > 0 ? (
            sortedUrns.map((urn) => (
              <motion.div
                key={urn._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg rounded-xl overflow-hidden">
                  <img src={urn.imagePath} alt={urn.name} className="w-full max-w-40 max-h-40 mx-auto object-contain" />
                  <CardContent className="p-4 text-center">
                    <h2 className="text-xl font-semibold">{urn.name}</h2>
                    <p className="text-gray-600 mt-1">
                      {new Intl.NumberFormat("cs-CZ", {
                        style: "currency",
                        currency: "CZK",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(urn.price)}
                    </p>
                    <Link to={`/urny/${urn._id}`}>
                      <Button className="mt-3 w-full bg-gray-700 text-white">Zobrazit detaily</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">Žádné betonové urny nebyly nalezeny.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
