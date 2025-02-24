import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { getNewestBlogs } from "@/models/Blog";

const blogPosts = [
  {
    title: "Pohřeb a jeho zařízení",
    image: "../../src/assets/images/Jak-se-vyrovnat.png",
    link: "/umrti1",
  },
  {
    title: "Úmrtí a právní záležitosti",
    image: "../../src/assets/images/Jak-vybrat-urnu.png",
    link: "/umrti",
  },
  {
    title: "Kremace a alternativní způsoby pohřbu",
    image: "../../src/assets/images/Mazlíčči-urny.png",
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
    link: "/umrti2",
  },
  {
    title: "Kremace a alternativní způsoby pohřbu",
    image: "../../src/assets/images/Zavěť.png",
    link: "/kremace3",
  },
];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadBlogs = async () => {
      const blogData = await getNewestBlogs();
      if (blogData.status === 200) {
        setBlogs(blogData.payload);
        setLoaded(true);
      }
    };
    loadBlogs();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="bg-gray-300 h-[1px] w-full" />
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center flex-none my-auto text-gray-800 dark:text-white"
          >
            Blog
          </motion.h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>
        <div className="text-center text-2xl font-bold my-6 text-gray-800 dark:text-white">
          S čím potřebujete poradit?
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link key={index} to={post.link} className="block">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
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
        <div className="text-center text-4xl font-bold my-6 text-gray-800 dark:text-white">
          Nejnovější příspěvky
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {isLoaded && blogs.length > 0 ? (
          blogs.map((post, index) => (
            <Link key={index} to={`/blog/${post._id}`} className="block">
              <motion.div
                className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={post.imagePath}
                  alt={post.heading}
                  className="w-full md:w-1/3 h-64 object-cover"
                />
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{post.heading}</h2>
                  <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300">Načítání příspěvků...</p>
        )}
      </div>
      <Footer />
    </>
  );
}