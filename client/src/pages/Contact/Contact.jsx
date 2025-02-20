import React, { useState } from 'react';
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import Contacts from '@/components/Contacts';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="bg-gray-300 h-[1px] w-full" />
                <h1 className="text-4xl font-bold text-center flex-none my-auto">
                  Kontakty
                </h1>
                <div className="bg-gray-300 h-[1px] w-full" />
              </div>
      
              <Card className="shadow-xl rounded-2xl p-6">
                <CardContent>
                <p className="text-2xl font-bold mb-1">
          Máte otázky?
        </p>
        <p className="text-lg mb-4">
          Jsme tu pro vás! Ať už máte dotaz nebo potřebujete poradit, neváhejte nás kontaktovat.
        </p>
        <p className="text-2xl font-bold mb-1">
          Jak nás můžete kontaktovat?
        </p>
        <ul className="list-inside list-disc pl-6 text-lg mb-4">
          <li><strong>E-mail</strong> - Pokud nám chcete napsat podrobnější dotaz nebo obchodní nabídku, pošlete nám e-mail. Odpovídáme co nejdříve.</li>
          <li><strong>Telefon</strong> - Preferujete osobní kontakt? Zavolejte nám a rádi s vámi probereme vše potřebné.</li>
          <li><strong>Kontaktní formulář</strong> - Máte rychlou otázku? Vyplňte formulář níže a my se vám ozveme.</li>
        </ul>
        <p className="text-2xl font-bold mb-1">
          Proč nás kontaktovat?
        </p>
        <ul className="list-inside list-disc pl-6 text-lg mb-4">
          <li><strong>Rychlá odezva</strong> – Vaše zprávy bereme vážně a snažíme se odpovědět co nejdříve.</li>
          <li><strong>Přátelský přístup</strong> – Ke každému dotazu nebo spolupráci přistupujeme individuálně.</li>
          <li><strong>Profesionální podpora</strong> – Máme zkušenosti a rádi vám pomůžeme s jakýmkoliv dotazem.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-12 text-center">Napište nám</h2>
        <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md ">
          <div className="mb-4">
            <label className="block text-gray-700">Jméno</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Zpráva</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded-md" rows="4" required></textarea>
          </div>
          <Button type="submit" className="w-full">Odeslat zprávu</Button>
        </form>
                </CardContent>
              </Card>
<Contacts/>
            </div>
      <Footer />
    </>
  );
}