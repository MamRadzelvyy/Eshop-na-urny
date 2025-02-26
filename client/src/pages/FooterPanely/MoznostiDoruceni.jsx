import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function MoznostiDoruceni() {
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
            Možnosti doručení
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
              Nabízíme několik možností doručení, aby vaše objednávka dorazila co nejrychleji a nejpohodlněji:
            </motion.p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li><strong>Kurýrní služba (PPL, DPD, GLS):</strong> Doručení do 2–3 pracovních dnů po celé ČR a SR.</li>
              <li><strong>Česká pošta:</strong> Balík Do ruky nebo Balík Na poštu s dodáním do 3–5 pracovních dnů.</li>
              <li><strong>Expresní doručení:</strong> Možnost doručení v rámci Prahy do 24 hodin.</li>
              <li><strong>Osobní odběr:</strong> Na naší pobočce v Praze – zdarma.</li>
              <li><strong>Mezinárodní doprava:</strong> Doručujeme do vybraných zemí EU s dodací lhůtou 5–10 pracovních dnů.</li>
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mt-4 text-gray-600 dark:text-gray-300"
            >
              V případě jakýchkoli dotazů ohledně možností doručení nás neváhejte kontaktovat.
            </motion.p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}

