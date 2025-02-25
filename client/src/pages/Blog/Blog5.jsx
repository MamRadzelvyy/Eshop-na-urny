import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";


export default function Blog5() {
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
        Události a zajímavosti
        </div>
      </div>
      <Footer />
    </>
  )
}
