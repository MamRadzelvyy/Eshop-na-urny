import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import { motion } from "framer-motion";

export default function Cooperation() {
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
            Spolupráce
          </motion.h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>

        <Card className="shadow-xl rounded-2xl p-6 bg-white dark:bg-gray-800">
          <CardContent>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              Hledáte partnera pro dlouhodobou a spolehlivou spolupráci?
            </motion.p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Nabízíme možnost spolupráce v oblasti velkoobchodního prodeje, výroby na míru a personalizace produktů. 
              Naším cílem je poskytovat kvalitní a individuálně přizpůsobené výrobky, které splňují potřeby našich klientů.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              Spolupráce s pohřebními službami a krematorii
            </motion.p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Máme zkušenosti se spoluprací s pohřebními službami, krematorii a dalšími partnery. 
              Naše produkty jsou navrženy s důrazem na kvalitu, respekt a profesionalitu.
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-400">Naše nabídka zahrnuje:</p>
            <ul className="list-inside list-disc pl-6 text-lg mb-6 text-gray-600 dark:text-gray-300">
              <li><strong>Velkoobchodní prodej:</strong> Široká škála kvalitních produktů za výhodné ceny.</li>
              <li><strong>Výroba na míru:</strong> Přizpůsobené produkty dle specifických požadavků klienta.</li>
              <li><strong>Zakázková personalizace:</strong> Gravírování, výběr materiálů a individuální design.</li>
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              Proč spolupracovat s námi?
            </motion.p>
            <ul className="list-inside list-disc pl-6 text-lg mb-6 text-gray-600 dark:text-gray-300">
              <li><strong>Rychlá odezva:</strong> Na vaše zprávy reagujeme co nejrychleji.</li>
              <li><strong>Individuální přístup:</strong> Ke každému partnerovi přistupujeme s maximální péčí.</li>
              <li><strong>Spolehlivost:</strong> Dlouhodobá spolupráce a kvalitní produkty.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-12 text-center text-gray-800 dark:text-white">
              Kontaktujte nás
            </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 text-center">
              Pokud máte zájem o spolupráci, neváhejte se nám ozvat. Rádi s vámi probereme detaily.
            </p>
          </CardContent>
        </Card>
        <Contacts />
      </div>
      <Footer />
    </>
  );
}
