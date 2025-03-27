import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getUrns } from "@/models/Urn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "sonner";
import UrnFilters from "@/components/UrnFilters/UrnFilters";

const categories = [
  {
    name: "Zvířecí urny S",
    image: "../../src/assets/images/Zvířecí Urny/UrnaS.png",
    link: "/male-zvireci-urny",
  },
  {
    name: "Zvířecí urny M",
    image: "../../src/assets/images/Zvířecí Urny/UrnaM.png",
    link: "/stredni-zvireci-urny",
  },
  {
    name: "Zvířecí urny L",
    image: "../../src/assets/images/Zvířecí Urny/UrnaL.png",
    link: "/velke-zvireci-urny",
  },
];

export default function AnimalUrns() {
  const dispatch = useDispatch();
  const [urns, setUrns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [sortBy, setSortBy] = useState("bestsellers");

  useEffect(() => {
    const loadUrns = async () => {
      const data = await getUrns();
      if (data.status === 200) {
        const animalUrns = data.payload.filter((urn) => urn.for === "Zvířecí");
        setUrns(animalUrns);
      }
    };
    loadUrns();
  }, []);

  const filteredUrns = urns
    .filter((urn) => urn.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((urn) => {
      const [min, max] = priceRange;
      return urn.price >= min && urn.price <= max;
    });

  const sortedUrns = [...filteredUrns].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    if (sortBy === "name_asc") return a.name.localeCompare(b.name);
    if (sortBy === "name_desc") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Zvířecí urny</h1>

        {/* 🐾 Kategorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center border w-48"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <p className="font-medium text-sm md:text-base">{category.name}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 🔍 Filtry */}
        <UrnFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          sortBy={sortBy}
          onSortByChange={setSortBy}
        />

        {/* 🧱 Výpis uren */}
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
                  <img
                    src={urn.imagePath}
                    alt={urn.name}
                    className="w-full max-w-40 max-h-40 mx-auto object-contain"
                  />
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
                    <div className="flex justify-center gap-4 mt-4">
                      <Link to={`/urny/${urn._id}`}>
                        <Button className="text-sm px-3 py-3 bg-gray-700 text-white">
                          Zobrazit detaily
                        </Button>
                      </Link>
                      <Button
                        className="px-7 py-3 bg-green-200 text-green-900 hover:bg-green-300"
                        onClick={() => {
                          dispatch(
                            addToCart({
                              _id: urn._id,
                              name: urn.name,
                              price: urn.price,
                              imagePath: urn.imagePath,
                            })
                          );
                          toast.success(`Přidáno do košíku: ${urn.name}`);
                        }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Žádné urny nesplňují vybraná kritéria.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}