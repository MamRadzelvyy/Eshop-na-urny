import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function MoznostiPlatby() {
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
            Možnosti platby
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
              Nabízíme různé možnosti platby, abyste si mohli vybrat tu
              nejvhodnější pro vás.
            </motion.p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Platba kartou (VISA, Mastercard):</strong> Rychlá a
                bezpečná platba online.
              </li>
              <li>
                <strong>Bankovní převod:</strong> Trvá obvykle 1–2 pracovní dny,
                objednávka je odeslána po přijetí platby.
              </li>
              <li>
                <strong>Dobírka:</strong> Platba v hotovosti nebo kartou při
                doručení kurýrem.
              </li>
              <li>
                <strong>Apple Pay / Google Pay:</strong> Moderní a pohodlné
                platební metody.
              </li>
              <li>
                <strong>Splátkový kalendář:</strong> Možnost rozložení platby u
                objednávek nad 5 000 Kč.
              </li>
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mt-4 text-gray-600 dark:text-gray-300"
            >
              V případě jakýchkoli dotazů ohledně platby nás neváhejte
              kontaktovat.
            </motion.p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
