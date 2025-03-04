import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  const [sortBy, setSortBy] = useState("bestsellers");

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Zvířecí urny</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center border w-48"
              >
                <img src={category.image} alt={category.name} className="w-16 h-16 object-contain mb-2" />
                <p className="font-medium text-sm md:text-base">{category.name}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
