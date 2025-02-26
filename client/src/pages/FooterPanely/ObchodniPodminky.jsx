import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ObchodniPodminky() {
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
            Obchodní podmínky
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
              Níže uvedené obchodní podmínky stanovují pravidla pro nákup v našem e-shopu Eternia. Před dokončením objednávky si prosím tyto podmínky pečlivě přečtěte.
            </motion.p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li><strong>Objednávka a uzavření smlouvy:</strong> Objednávka je závazná po jejím potvrzení z naší strany. Kupní smlouva vzniká v okamžiku přijetí objednávky.</li>
              <li><strong>Platební podmínky:</strong> Nabízíme platbu kartou, bankovním převodem, dobírkou a moderními platebními metodami.</li>
              <li><strong>Doručení:</strong> Standardní doba doručení je 3–5 pracovních dnů. Expresní doručení je možné po předchozí domluvě.</li>
              <li><strong>Reklamace a vrácení zboží:</strong> Zákazník má právo vrátit nepoužité zboží do 14 dnů od převzetí. Personalizované produkty nelze vrátit.</li>
              <li><strong>Ochrana osobních údajů:</strong> Veškeré osobní údaje jsou zpracovány v souladu s GDPR a jsou chráněny proti zneužití.</li>
              <li><strong>Zákaznická podpora:</strong> V případě dotazů nebo problémů nás můžete kontaktovat na <a href="mailto:urny@eternia.cz?subject=Dotaz%20na%20obchodní%20podmínky" className="text-blue-600 hover:underline">urny@eternia.cz</a>.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}

