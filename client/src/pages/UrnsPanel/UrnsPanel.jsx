import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const urns = [
  { id: 1, name: "Kovová urna Ariela", image: "/images/urny/kovova-ariela.jpg", price: "2 500 Kč" },
  { id: 2, name: "Ekologická urna Classic Růže", image: "/images/urny/classic-ruze.jpg", price: "1 800 Kč" },
  { id: 3, name: "Keramická urna Emilia", image: "/images/urny/keramicka-emilia.jpg", price: "2 200 Kč" },
  { id: 4, name: "Ekologická urna Carrea", image: "/images/urny/ekologicka-carrea.jpg", price: "2 000 Kč" },
];

export default function UrnsPanel() {
  const [sortBy, setSortBy] = useState("bestsellers");

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
          {urns.map((urn) => (
            <motion.div 
              key={urn.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg rounded-xl overflow-hidden">
                <img src={urn.image} alt={urn.name} className="w-full h-64 object-cover" />
                <CardContent className="p-4 text-center">
                  <h2 className="text-xl font-semibold">{urn.name}</h2>
                  <p className="text-gray-600 mt-1">{urn.price}</p>
                  <Button className="mt-3 w-full bg-gray-700 text-white">Zobrazit detail</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
