import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlog } from "@/models/Blog";
import moment from "moment";

export default function BlogView() {
  const [blog, setBlog] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  const loadBlog = async () => {
    const blogData = await getBlog(id);
    if (blogData.status === 200) {
      setBlog(blogData.payload);
      setLoaded(true);
      const blogContent = document.getElementById("blogContent");
      if (blogContent) blogContent.innerHTML = blogData.payload.content;
    }
  };

  useEffect(() => {
    loadBlog();
  }, []);

  return (
    <>
      <Header />
      {isLoaded ? (
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl mb-1">{blog.heading}</h1>
              <p>Vytvořeno: {moment(blog.createdAt).format("DD.M YYYY")}</p>
              <p>Téma: {blog.theme}</p>
            </div>
            <img src={blog.imagePath} alt="" className="max-w-32 rounded-lg" />
          </div>
          <div className="bg-gray-300 h-[1px] w-full my-4" />
          <p id="blogContent" className="indent-[4rem] first-letter:text-3xl" />
        </div>
      ) : (
        "Blog se načítá"
      )}
      <Footer />
    </>
  );
}
