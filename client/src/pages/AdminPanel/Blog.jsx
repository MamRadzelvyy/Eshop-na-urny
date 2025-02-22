import React, { useEffect, useState } from "react";
import { deleteBlog } from "@/models/Blog";
import { Trash2, SquarePen, SquarePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data.payload))
      .catch((err) => console.error("Chyba při načítání blogů:", err));
  };

  const handleDelete = async (formId) => {
    const blogsreq = await deleteBlog(formId);
    if (blogsreq.status === 200) loadBlogs();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Admin Panel – Blogy
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="border-b py-4">
              <p>
                <strong>Nadpis:</strong> {blog.heading}
              </p>
              <p>
                <strong>Popisek:</strong> {blog.description}
              </p>
              <p>
                <strong>Vytvořeno:</strong> {blog.createdAt}
              </p>
              <p className="text-gray-500 text-sm">
                Odesláno: {new Date(blog.createdAt).toLocaleString()}
              </p>
              <div className="flex gap-1">
                <Trash2
                  className="cursor-pointer hover:bg-black/10 p-1 rounded-md transition-colors"
                  onClick={() => handleDelete(blog._id)}
                />
                <Link to={`/update-blog/${blog._id}`} className="hover:bg-black/10 rounded-md transition-colors">
                  <SquarePen className="p-1" />
                </Link>
                <Link to={`/create-blog/`} className="hover:bg-black/10 rounded-md transition-colors">
                  <SquarePlus className="p-1" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Žádné blogy zatím nebyly vytvořeny.</p>
        )}
      </div>
    </div>
  );
}
