import React, { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Contacts from "@/components/Contacts";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Děkujeme za vaši zprávu! Brzy se vám ozveme.");
    setFormData({ name: "", email: "", message: "" });
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
            className="text-4xl font-bold text-center flex-none my-auto text-gray-800 dark:text-white"
          >
            Kontakty
          </motion.h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>

        <Card className="shadow-xl rounded-2xl p-6 bg-white dark:bg-gray-800">
          <CardContent>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-2 text-gray-800 dark:text-white"
            >
              Máte otázky?
            </motion.p>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
              Jsme tu pro vás! Ať už máte dotaz nebo potřebujete poradit, neváhejte nás kontaktovat.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold mb-2 text-gray-800 dark:text-white"
            >
              Jak nás můžete kontaktovat?
            </motion.p>
            <ul className="list-inside list-disc pl-6 text-lg mb-4 text-gray-600 dark:text-gray-300">
              <li><strong>E-mail</strong> – Napište nám podrobnější dotaz nebo obchodní nabídku.</li>
              <li><strong>Telefon</strong> – Preferujete osobní kontakt? Zavolejte nám!</li>
              <li><strong>Kontaktní formulář</strong> – Rychlá možnost, jak se s námi spojit.</li>
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl font-bold mb-2 text-gray-800 dark:text-white"
            >
              Proč nás kontaktovat?
            </motion.p>
            <ul className="list-inside list-disc pl-6 text-lg mb-4 text-gray-600 dark:text-gray-300">
              <li><strong>Rychlá odezva</strong> – Odpovíme co nejdříve.</li>
              <li><strong>Přátelský přístup</strong> – Každý dotaz řešíme individuálně.</li>
              <li><strong>Profesionální podpora</strong> – Máme zkušenosti a rádi vám pomůžeme.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-12 text-center text-gray-800 dark:text-white">
              Napište nám
            </h2>
            <ContactForm />
          </CardContent>
        </Card>
        <Contacts />
      </div>
      <Footer />
    </>
  );
}
