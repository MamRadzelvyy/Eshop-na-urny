import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { getBlog } from "@/models/Blog";
import moment from "moment";
import { motion } from "framer-motion";

export default function BlogView() {
  const [blog, setBlog] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const loadBlog = async () => {
      const blogData = await getBlog(id);
      if (blogData.status === 200) {
        setBlog(blogData.payload);
        setLoaded(true);
        const blogContent = document.getElementById("blogContent");
        if (blogContent) blogContent.innerHTML = blogData.payload.content;
      }
    };
    loadBlog();
  }, [id]);

  return (
    <>
      <Header />
      {isLoaded ? (
        <div className="max-w-4xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{blog.heading}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Vytvořeno: {moment(blog.createdAt).format("DD. MM. YYYY")} | Téma: {blog.theme}
            </p>
            <img
              src={blog.imagePath}
              alt={blog.heading}
              className="w-full h-80 object-cover rounded-lg mt-4 shadow-md"
            />
            <div className="bg-gray-300 dark:bg-gray-600 h-[1px] w-full my-6" />
            <div id="blogContent" className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" />
          </motion.div>
        </div>
      ) : (
        <p className="text-center text-gray-700 dark:text-gray-300 py-10">Načítání blogu...</p>
      )}
      <Footer />
    </>
  );
}