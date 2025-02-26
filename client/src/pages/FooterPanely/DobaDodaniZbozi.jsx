import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function DobaDodaniZbozi() {
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
            Doba dodání zboží
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
              Doba dodání zboží závisí na typu objednávky, dostupnosti produktů a zvoleném způsobu dopravy. Snažíme se vaše objednávky vyřizovat co nejrychleji a zajistit bezproblémovou dopravu. 
              U standardních produktů obvykle expedujeme objednávku do 24 hodin od potvrzení platby. Personalizované produkty, které zahrnují gravírování nebo speciální úpravy, mohou vyžadovat delší výrobní dobu.
            </motion.p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li><strong>Standardní doručení:</strong> 3–5 pracovních dnů v rámci ČR, 5–7 pracovních dnů pro Slovensko. Objednávky jsou odesílány kurýrní službou nebo poštou.</li>
              <li><strong>Expresní doručení:</strong> Do 24 hodin v rámci Prahy, do 48 hodin pro ostatní regiony ČR. Doporučujeme nás kontaktovat pro ověření dostupnosti.</li>
              <li><strong>Personalizované produkty:</strong> Výroba a doručení může trvat 7–10 pracovních dnů v závislosti na složitosti úprav.</li>
              <li><strong>Mezinárodní doprava:</strong> Objednávky do EU obvykle dorazí do 7–10 pracovních dnů. Doprava do dalších zemí se liší podle lokality.</li>
              <li><strong>Doprava zdarma:</strong> U objednávek nad 3 000 Kč v rámci ČR. Pro mezinárodní objednávky platí individuální podmínky.</li>
              <li><strong>Možnosti sledování:</strong> Po odeslání zásilky obdržíte e-mail s číslem zásilky pro sledování jejího doručení.</li>
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mt-4 text-gray-600 dark:text-gray-300"
            >
              Pokud máte jakékoli speciální požadavky na doručení nebo potřebujete více informací o dopravě, neváhejte se na nás obrátit. Rádi vám pomůžeme najít nejvhodnější řešení.
            </motion.p>
          </CardContent>
        </Card>
        <motion.div className="text-center mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Pokud potřebujete více informací o možnostech doručení, neváhejte nás kontaktovat.</p>
          <a href="mailto:urny@eternia.cz?subject=Dotaz k dodání">
            <motion.button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md" whileHover={{ scale: 1.1 }}>
              Kontaktujte nás
            </motion.button>
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
