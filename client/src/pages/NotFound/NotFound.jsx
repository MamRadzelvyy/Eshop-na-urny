import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import NotFoundPic from "@/assets/images/NotFoundPic/NotFoundPic.png";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-white">
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 8 }}
        className="text-7xl mb-4"
      >
              <img
  src={NotFoundPic}
  alt="404 - Stránka nenalezena"
  className="max-w-[180px] md:max-w-[220px] lg:max-w-[260px] w-full mb-6"
/>

      </motion.div>

      {/* Animovaný text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        className="text-4xl font-bold text-red-600 mb-2"
      >
        Stránka nenalezena
      </motion.h1>

      <p className="text-gray-600 mb-4 text-lg">
        Tato urna (ehm... stránka) se zřejmě rozpadla v prach.
      </p>

      <p className="text-sm text-gray-400 mb-6">
        Za pár sekund budeš přesměrován na úvodní stránku.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Zpět na hlavní stránku
      </Link>
    </div>
  );
}
