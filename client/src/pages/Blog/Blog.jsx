import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { getNewestBlogs } from "@/models/Blog";

const blogPosts = [
  {
    title: "Pohřeb a jeho zařízení",
    image: "../../src/assets/images/Jak-se-vyrovnat.png",
  },
  {
    title: "Úmrtí a právní záležitosti",
    image: "../../src/assets/images/Jak-vybrat-urnu.png",
    link: "/umrti",
  },
  {
    title: "Kremace a alternativní způsoby pohřbu",
    image: "/../../src/assets/images/Mazlíčči-urny.png",
    link: "/kremace",
  },
  {
    title: "Pohřeb a jeho zařízení",
    image: "../../src/assets/images/Pohřeb.png",
    link: "/pohreb",
  },
  {
    title: "Úmrtí a právní záležitosti",
    image: "../../src/assets/images/Události.png",
    link: "/umrti",
  },
  {
    title: "Kremace a alternativní způsoby pohřbu",
    image: "../../src/assets/images/Zavěť.png",
    link: "/kremace",
  },
];

const otherPosts = [
  {
    title: "Jak se připravit na Dušičky 2024: Tipy a tradice",
    image: "../../src/assets/images/Zavěť.png",
    link: "/dusicky",
    excerpt:
      "Dušičky, neboli Památka zesnulých, jsou tradiční svátek, během kterého si lidé připomínají své blízké...",
  },
  {
    title: "Průvodce pohřebními obřady",
    image: "../../src/assets/images/Zavěť.png",
    link: "/pohrebni-obrady",
    excerpt:
      "Vše, co potřebujete vědět o organizaci pohřebních obřadů, od výběru kytice po průběh ceremoniálu...",
  },
  {
    title: "Alternativní způsoby posledního rozloučení",
    image: "../../src/assets/images/Zavěť.png",
    link: "/alternativni-pohreb",
    excerpt:
      "Hledáte jiné možnosti než klasický pohřeb? Seznamte se s ekologickými a netradičními způsoby rozloučení...",
  },
  {
    title: "Alternativní způsoby posledního rozloučení",
    image: "../../src/assets/images/Zavěť.png",
    link: "/alternativni-pohreb",
    excerpt:
      "Hledáte jiné možnosti než klasický pohřeb? Seznamte se s ekologickými a netradičními způsoby rozloučení...",
  },
  {
    title: "Alternativní způsoby posledního rozloučení",
    image: "../../src/assets/images/Zavěť.png",
    link: "/alternativni-pohreb",
    excerpt:
      "Hledáte jiné možnosti než klasický pohřeb? Seznamte se s ekologickými a netradičními způsoby rozloučení...",
  },
];

const dusickyPost = {
  title: "Jak se připravit na Dušičky 2024: Tipy a tradice",
  image: "../../src/assets/images/Zavěť.png",
  link: "/dusicky",
  excerpt:
    "Dušičky, neboli Památka zesnulých, jsou tradiční svátek, během kterého si lidé připomínají své blízké, kteří už nejsou mezi námi. Tento den, který připadá na 2. listopadu, je pro mnoho rodin příležitostí k návštěvě hřbitovů, zapalování svíček a tichému vzpomínání...",
};

export default function Blog() {
  const [blogs, setBlogs] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const loadBlogs = async () => {
    const blogData = await getNewestBlogs();
    if (blogData.status === 200) {
      setBlogs(blogData.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="bg-gray-300 h-[1px] w-full" />
          <h1 className="text-4xl font-bold text-center flex-none my-auto h-full">
            Blog
          </h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>
        <div className="text-center text-2xl font-bold my-6">
          S čím potřebujete poradit?
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link key={index} to={post.link} className="block">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover brightness-75"
                />
                <div className="absolute bottom-0 left-0 w-full text-shadow p-4 text-white text-lg font-semibold">
                  {post.title}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="text-center text-4xl font-bold my-6">
          Nejnovější příspěvky
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {(isLoaded === true && blogs) ? (
          <>
            {blogs.map((post, index) => (
              <Link key={index} to={post._id} className="block">
                <motion.div
                  className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={post.imagePath}
                    alt={post.heading}
                    className="w-full md:w-1/3 h-64 object-cover"
                  />
                  <div className="p-6 md:w-2/3">
                    <h2 className="text-2xl font-bold mb-2">{post.heading}</h2>
                    <p className="text-gray-700">{post.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </>
        ) : (
          "a"
        )}
      </div>

      <Footer />
    </>
  );
}
