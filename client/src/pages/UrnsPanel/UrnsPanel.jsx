import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getUrns } from "@/models/Urn";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'sonner';
import UrnFilters from "@/components/UrnFilters/UrnFilters";


const categories = [
  {
    name: "Ekologické urny",
    image: "../../src/assets/images/MainPage/ekologicka-urna.png",
    link: "/ekologicke-urny",
  },
  {
    name: "Kovové urny",
    image: "../../src/assets/images/MainPage/kovova-urna.png",
    link: "/kovove-urny",
  },
  {
    name: "Keramické urny",
    image: "../../src/assets/images/MainPage/keramicka urna.png",
    link: "/keramicke-urny",
  },
  {
    name: "Kamenné urny",
    image: "../../src/assets/images/MainPage/kamenna-urna.png",
    link: "/kamenne-urny",
  },
  {
    name: "Betonové urny",
    image: "../../src/assets/images/MainPage/sklenena-urna.png",
    link: "/betonove-urny",
  },
  {
    name: "Dřevěné urny",
    image: "../../src/assets/images/MainPage/drevenna-urna.png",
    link: "/drevene-urny",
  },
];

export default function UrnsPanel() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("bestsellers");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [urns, setUrns] = useState([]);

  useEffect(() => {
    const loadUrns = async () => {
      const data = await getUrns();
      if (data.status === 200) {
        const filteredUrns = data.payload.filter(
          (urn) => urn.for === "Lidská" && urn.material !== "test"
        );
        setUrns(filteredUrns);
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
        <h1 className="text-4xl font-bold text-center mb-6">Urny</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center border"
              >
                <img src={category.image} alt={category.name} className="w-16 h-16 object-contain mb-2" />
                <p className="font-medium text-sm md:text-base">{category.name}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <UrnFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          sortBy={sortBy}
          onSortByChange={setSortBy}
        />

        {sortedUrns.length === 0 ? (
          <p className="text-center text-gray-500">Žádné urny nesplňují vybraná kritéria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedUrns.map((urn) => (
              <motion.div
                key={urn._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg rounded-xl overflow-hidden">
                  <img src={urn.imagePath} alt={urn.name} className="w-full h-64 object-contain" />
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
                          dispatch(addToCart({
                            _id: urn._id,
                            name: urn.name,
                            price: urn.price,
                            imagePath: urn.imagePath
                          }));
                          toast.success(`Přidáno do košíku: ${urn.name}`);
                        }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
