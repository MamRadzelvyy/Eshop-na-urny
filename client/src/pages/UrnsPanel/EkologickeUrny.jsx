import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getUrns } from "@/models/Urn";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "sonner";
import UrnFilters from "../../components/UrnFilters/UrnFilters";

export default function EkologickeUrny() {
  const dispatch = useDispatch();
  const [urns, setUrns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [sortBy, setSortBy] = useState("bestsellers");

  useEffect(() => {
    const loadUrns = async () => {
      const data = await getUrns();
      if (data.status === 200) {
        const filteredUrns = data.payload.filter(
          (urn) => urn.material === "Ekologické urny"
        );
        setUrns(filteredUrns);
      }
    };
    loadUrns();
  }, []);

  const filteredUrns = urns
    .filter((urn) =>
      urn.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
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
        <h1 className="text-4xl font-bold text-center mb-6">Ekologické urny</h1>

        <UrnFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          sortBy={sortBy}
          onSortByChange={setSortBy}
        />

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
