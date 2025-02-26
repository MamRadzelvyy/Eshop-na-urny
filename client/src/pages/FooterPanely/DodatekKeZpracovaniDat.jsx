import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function DodatekKeZpracovaniDat() {
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
            Dodatek ke zpracování dat
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
              Tento dokument slouží jako doplněk k zásadám ochrany osobních údajů a specifikuje způsoby, jakými zpracováváme a chráníme vaše osobní údaje.
            </motion.p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li><strong>Typy shromažďovaných údajů:</strong> Zpracováváme pouze nezbytné osobní údaje pro vyřízení objednávek, zákaznickou podporu a marketingové účely.</li>
              <li><strong>Účely zpracování:</strong> Vaše údaje používáme k zajištění bezpečného nákupu, personalizované komunikace a vylepšení našich služeb.</li>
              <li><strong>Doba uchování:</strong> Osobní údaje uchováváme pouze po dobu nezbytně nutnou ke splnění účelu jejich zpracování, maximálně po dobu vyžadovanou platnými zákony.</li>
              <li><strong>Ochrana údajů:</strong> Využíváme moderní zabezpečovací technologie, aby byla vaše data chráněna proti neoprávněnému přístupu.</li>
              <li><strong>Vaše práva:</strong> Máte právo požadovat přístup ke svým údajům, jejich opravu, výmaz nebo omezení zpracování.</li>
              <li><strong>Kontakt:</strong> V případě dotazů nebo žádostí nás můžete kontaktovat na <a href="mailto:urnya@eternia.cz?subject=Ochrana%20osobních%20údajů" className="text-blue-600 hover:underline">urny@eternia.cz</a>.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
