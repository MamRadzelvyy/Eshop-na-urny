import React, { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { createPoptavka } from "@/models/Poptavka";

export default function Poptavka() {
  const [poptavkaData, setPoptavkaData] = useState({
    name: "",
    email: "",
    telnumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setPoptavkaData({ ...poptavkaData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPoptavka(poptavkaData);
      console.log(poptavkaData);
      setStatus("✅ Poptávka byla úspěšně odeslána!");
      setPoptavkaData({ name: "", email: "", telnumber: "", message: "" });

      // Skrytí úspěšné zprávy po 3 sekundách
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      setStatus("❌ Odeslání se nezdařilo. Zkuste to znovu.");
    }
  };

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
            Poptávka
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
              Máte specifické požadavky na produkt, který není v naší standardní
              nabídce? Rádi vám pomůžeme! Vyplňte níže uvedený formulář a my se
              vám co nejdříve ozveme s možnostmi řešení na míru.
            </motion.p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Jméno a příjmení
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  name="name"
                  value={poptavkaData.name}
                  onChange={handleChange}
                  placeholder="Zadejte vaše jméno"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  name="email"
                  value={poptavkaData.email}
                  onChange={handleChange}
                  placeholder="Zadejte váš e-mail"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md"
                  name="telnumber"
                  value={poptavkaData.telnumber}
                  onChange={handleChange}
                  placeholder="Zadejte váš telefon"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Detail poptávky
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows="4"
                  name="message"
                  value={poptavkaData.message}
                  onChange={handleChange}
                  placeholder="Popište váš požadavek..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                whileHover={{ scale: 1.05 }}
              >
                Odeslat poptávku
              </motion.button>

              {/* Úspěšná zpráva pod tlačítkem */}
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-center font-medium text-green-600 dark:text-green-400"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
