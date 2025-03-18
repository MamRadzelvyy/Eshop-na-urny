import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DokumentyKeStazeni() {
  const documents = [
    { name: "Obchodní podmínky", link: "../../src/assets/documents/cena-dopravy.pdf" },
    { name: "Reklamační řád", link: "../../src/assets/documents/reklamaci-rad.pdf" },
    { name: "Ochrana osobních údajů", link: "../../src/assets/documents/ochrana-osobnich-udaju.pdf" },
    { name: "Formulář pro odstoupení od smlouvy", link: "../../src/assets/documents/pouceni-o-pravu-na-odstoupeni-od-smlouvy.pdf" },
    { name: "Dodací podmínky", link: "../../src/assets/documents/dodaci-podminky.pdf" },
    { name: "Návod k údržbě výrobků", link: "../../src/assets/documents/navod-k-udrzbe.pdf" },
    { name: "Ceník dopravy a služeb", link: "../../src/assets/documents/cena-dopravy.pdf" },
    { name: "Záruka a podmínky servisu", link: "../../src/assets/documents/zaruka-a-podminky-servisu.pdf" }
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
            Dokumenty ke stažení 
          </motion.h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>
        <Card className="shadow-xl rounded-2xl p-6 bg-white dark:bg-gray-800">
          <CardContent>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-6 text-gray-600 dark:text-gray-300"
            >
              Zde naleznete všechny důležité dokumenty ke stažení, které vám pomohou při nákupu, reklamacích či odstoupení od smlouvy.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between h-full"
                >
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{doc.name}</h2>
                  <Download size={32} className="text-blue-600 dark:text-blue-400 mx-auto mt-auto" />
                  <a 
                    href={doc.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline dark:text-blue-400 block mt-2"
                  >
                    Stáhnout
                  </a>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
