import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function VraceniAReklamace() {
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
            Vrácení a reklamace
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
              Pokud nejste s objednaným produktem spokojeni nebo jste obdrželi vadné zboží, nabízíme vám možnost vrácení nebo reklamace. Níže naleznete podrobnosti o podmínkách vrácení a reklamačním procesu.
            </motion.p>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Podmínky pro vrácení</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Zboží lze vrátit do 14 dnů od doručení bez udání důvodu.</li>
              <li>Zboží musí být nepoškozené, nepoužité a v původním obalu.</li>
              <li>Personalizované produkty nelze vrátit.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Reklamační proces</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Reklamaci můžete uplatnit do 24 měsíců od zakoupení.</li>
              <li>Kontaktujte nás na <a href="mailto:urny@eternia.cz" className="text-blue-600 hover:underline">urny@eternia.cz</a> a uveďte číslo objednávky a popis problému.</li>
              <li>Po schválení reklamace vám poskytneme instrukce k zaslání zboží zpět.</li>
              <li>Reklamace je obvykle vyřízena do 14 dnů od přijetí vráceného zboží.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Další informace</h2>
            <p className="text-gray-600 dark:text-gray-300">
              V případě jakýchkoliv dotazů nás neváhejte kontaktovat na výše uvedeném e-mailu.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
