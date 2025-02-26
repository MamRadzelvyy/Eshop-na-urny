import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function OchranaOsobnichUdaju() {
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
            Ochrana osobních údajů
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
              Společnost Eternia s.r.o. se zavazuje k ochraně osobních údajů našich zákazníků v souladu s platnými právními předpisy, včetně nařízení GDPR. Tato stránka obsahuje podrobné informace o tom, jaké údaje shromažďujeme, jak je využíváme a jaké jsou vaše práva.
            </motion.p>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Jaké údaje shromažďujeme?</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Identifikační údaje (jméno, příjmení, adresa).</li>
              <li>Kontaktní údaje (telefon, e-mail).</li>
              <li>Platební údaje (pouze v rozsahu potřebném k vyřízení objednávky).</li>
              <li>Historie objednávek a komunikace.</li>
              <li>Technická data (IP adresa, soubory cookies).</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Jak vaše údaje využíváme?</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Zpracování objednávek a poskytování služeb.</li>
              <li>Zlepšování uživatelské zkušenosti na našem e-shopu.</li>
              <li>Marketingové účely (pouze s vaším souhlasem).</li>
              <li>Plnění zákonných povinností.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Vaše práva</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Máte právo na přístup ke svým údajům, opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku proti zpracování.
            </p>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Jak nás kontaktovat?</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Pokud máte jakékoli dotazy týkající se ochrany osobních údajů, kontaktujte nás na e-mailu:
              <a href="mailto:urny@eternia.cz" className="text-blue-600 hover:underline"> urny@eternia.cz</a>
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
