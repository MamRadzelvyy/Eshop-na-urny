import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PackageOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Kovová urna Ariela", image: "../../src/assets/images/Slider/Kovová urna Ariela.png", link: "/urny" },
  { id: 2, name: "Ekologická urna Růže", image: "../../src/assets/images/Slider/Ekologická urna Classic Růže.png", link: "/urny" },
  { id: 3, name: "Keramická urna Emilia", image: "../../src/assets/images/Slider/Keramická urna Emilia.png", link: "/urny" },
  { id: 4, name: "Ekologická urna Carrea", image: "../../src/assets/images/Slider/Ekologická urna Carrea.png", link: "/urny" },
];

const categories = [
  { name: "Ekologické urny", image: "../../src/assets/images/MainPage/ekologicka-urna.png", link: "/ekologicke-urny" },
  { name: "Kovové urny", image: "../../src/assets/images/MainPage/kovova-urna.png", link: "/kovove-urny" },
  { name: "Keramické urny", image: "../../src/assets/images/MainPage/keramicka urna.png", link: "/keramicke-urny" },
  { name: "Kamenné urny", image: "../../src/assets/images/MainPage/kamenna-urna.png", link: "/kamenne-urny" },
  { name: "Betonové urny", image: "../../src/assets/images/MainPage/sklenena-urna.png", link: "/betonove-urny" },
  { name: "Dřevěné urny", image: "../../src/assets/images/MainPage/drevenna-urna.png", link: "/drevene-urny" },
];

export default function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="relative bg-gray-100 p-8 rounded-xl flex flex-col items-center gap-6 shadow-lg">
          <motion.div
            key={products[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold">{products[currentIndex].name}</h2>
              <p className="text-gray-600">Na výběr z několika variant</p>
              <Link to={products[currentIndex].link}>
                <Button className="mt-4 bg-gray-700 hover:bg-gray-800">Zobrazit více</Button>
              </Link>
            </div>
            <motion.img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-80 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <Button variant="outline" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <Button variant="outline" onClick={nextSlide}>
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 text-center">
          Doporučené kategorie
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="flex flex-col items-center p-4">
                  <CardContent className="text-center">
                    <img src={category.image} alt={category.name} className="w-full h-20 md:h-24 object-contain rounded-lg mb-2" />
                    <p className="font-medium text-sm md:text-base">{category.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/urnspanel">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button variant="outline">Zobrazit více</Button>
            </motion.div>
          </Link>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 text-center">
          Nejprodávanější
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <Card key={product.id} className="p-4">
              <CardContent className="flex flex-col items-center">
                <PackageOpen size={48} />
                <p className="mt-2 font-medium">{product.name}</p>
                <Link to={product.link}>
                  <Button className="mt-2">Detail</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
      <Footer />
    </>
  );
}
