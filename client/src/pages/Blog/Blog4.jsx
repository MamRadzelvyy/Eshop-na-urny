import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { getBlogByTheme } from "@/models/Blog";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getBlogByTheme("Kremace a způsoby pohřbu");
      if (response.status === 200) {
        setBlogs(response.payload);
      }
      setIsLoaded(true);
    };
    fetchBlogs();
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
        <div className="text-center text-4xl font-bold my-6 text-gray-800 dark:text-white">
        Kremace a způsoby pohřbu
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