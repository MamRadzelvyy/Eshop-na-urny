import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function VydejnyEshop() {
  const locations = [
    {
      city: "Praha",
      address: "Národní 12, 110 00, Praha 1",
      description: "Naše pražská pobočka se nachází v centru města, snadno dostupná MHD. Nabízíme zde kompletní sortiment a osobní konzultace.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.392207671207!2d14.418540676771832!3d50.080693171564106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a4f56b41e7%3A0xa4f2c4d4e3549b69!2sN%C3%A1rodn%C3%AD+12%2C+110+00+Praha%2C+%C4%8Cesk%C3%A1+republika!5e0!3m2!1sen!2scz!4v1649949952975!5m2!1sen!2scz"
    },
    {
      city: "Brno",
      address: "Masarykova 25, 602 00, Brno",
      description: "Brněnská pobočka nabízí možnost rychlého odběru objednávek a odborné poradenství ohledně našich produktů.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.154322488072!2d16.60796071567338!3d49.19506047931769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295c1b012723b%3A0x9b8f5e1a8e5b6e88!2sMasarykova%2025%2C%20602%2000%20Brno!5e0!3m2!1sen!2scz!4v1649949977763!5m2!1sen!2scz"
    },
    {
      city: "Ostrava",
      address: "Nádražní 120, 702 00, Ostrava",
      description: "V Ostravě jsme pro vás připravili pobočku s pohodlným parkováním a možností konzultací.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.267773509124!2d18.28204431567525!3d49.83564597939179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e33f1e99d8d3%3A0xf4a6b2c30e23b38f!2sN%C3%A1dra%C5%BEn%C3%AD%20120%2C%20702%2000%20Ostrava!5e0!3m2!1sen!2scz!4v1649949999732!5m2!1sen!2scz"
    },
    {
      city: "Plzeň",
      address: "Americká 56, 301 00, Plzeň",
      description: "Plzeňská pobočka se nachází v obchodním centru a nabízí širokou dostupnost.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.553943888099!2d13.37322191567693!3d49.74665857937457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af1a12cba9bdf%3A0xb6e3f4c3b2c0c4bb!2sAmerick%C3%A1%2056%2C%20301%2000%20Plze%C5%88!5e0!3m2!1sen!2scz!4v1649950021345!5m2!1sen!2scz"
    }
  ];

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
            className="text-4xl font-bold text-center flex-none my-auto h-full text-gray-800 dark:text-white"
          >
            Výdejny e-shopu
          </motion.h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>
        {locations.map((location, index) => (
          <Card key={index} className="shadow-xl rounded-2xl p-6 bg-white dark:bg-gray-800 mb-6">
            <CardContent>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{location.city}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{location.address}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{location.description}</p>
              <iframe 
                className="w-full h-56 md:h-full rounded-xl mt-4"
                src={location.mapEmbed}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        ))}
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-center">
          Pokud máte jakékoli dotazy ohledně výdeje, neváhejte nás kontaktovat na <a href="mailto:urny@eternia.cz" className="text-blue-600 hover:underline">urny@eternia.cz</a>.
        </p>
      </div>
      <Footer />
    </>
  );
}
