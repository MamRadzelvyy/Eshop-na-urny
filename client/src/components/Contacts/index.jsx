import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-8 text-center text-gray-800 dark:text-white">Kontakty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="shadow-xl rounded-xl p-6 bg-white dark:bg-gray-800">
          <CardContent className="flex flex-col gap-4 !p-0 text-gray-700 dark:text-gray-300">
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 transition-all"
            >
              <Mail size={22} className="text-blue-600" />
              <span className="hover:text-blue-500">urny@eternia.cz</span>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 transition-all"
            >
              <Phone size={22} className="text-green-600" />
              <span className="hover:text-green-500">+420 123 456 789</span>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 transition-all"
            >
              <MapPin size={22} className="text-red-600" />
              <span className="hover:text-red-500">Národní 12, Praha, Česká republika</span>
            </motion.p>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            className="w-full h-56 md:h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.392207671207!2d14.418540676771832!3d50.080693171564106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a4f56b41e7%3A0xa4f2c4d4e3549b69!2sN%C3%A1rodn%C3%AD%2012%2C%20110%2000%20Star%C3%A9%20M%C4%9Bsto!5e0!3m2!1sen!2scz!4v1649949952975!5m2!1sen!2scz"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <a href="mailto:urny@eternia.cz?subject=Spolupráce" className="inline-block">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              Napsat e-mail
            </Button>
          </motion.div>
        </a>
      </div>
    </>
  );
}
