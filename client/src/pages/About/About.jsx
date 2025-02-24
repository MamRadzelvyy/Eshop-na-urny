import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Links from "@/components/Links";
import { motion } from "framer-motion";

export default function About() {
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
            O nás
          </motion.h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>
        <Card className="shadow-xl rounded-2xl p-6 bg-white dark:bg-gray-800">
          <CardContent>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-4 text-gray-600 dark:text-gray-300"
            >
              Eternia je specializovaný e-shop zaměřený na kvalitní urny, které
              pomáhají uchovat důstojnou památku na vaše blízké. Od našeho
              založení se snažíme poskytovat široký výběr uren, které spojují
              eleganci, kvalitu a úctu k zesnulým.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-4 text-gray-600 dark:text-gray-300"
            >
              V naší nabídce najdete urny vyrobené z různých materiálů, včetně
              keramiky, kovu, dřeva, skla a ekologických variant. Každý produkt
              je navržen s důrazem na detail, aby splňoval jak estetické, tak
              funkční požadavky.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg mb-4 text-gray-600 dark:text-gray-300"
            >
              Chápeme, že výběr urny je osobní záležitost, a proto se snažíme
              nabídnout širokou škálu designů – od tradičních a elegantních
              modelů až po moderní a umělecké kousky. Naším cílem je, aby si
              každý zákazník našel urnu, která bude odpovídat jeho představám a
              bude důstojnou vzpomínkou.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg mb-4 text-gray-600 dark:text-gray-300"
            >
              Téměř všechny naše urny jsou uzpůsobeny pro úřední plastové vložky
              z krematorií v České a Slovenské republice. Nabízíme také možnost
              gravírování nebo mosazných štítků pro personalizaci.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Děkujeme, že jste si vybrali Eternia – místo, kde vzpomínky
              přetrvávají.
            </motion.p>
            <Links />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
