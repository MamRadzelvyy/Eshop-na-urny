import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentCancel() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <XCircle className="text-red-500 w-14 h-14 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-red-600 mb-4">Platba zrušena ❌</h1>
        <p className="text-gray-700 text-lg mb-6">
          Platba byla zrušena. Můžete to zkusit znovu později.
        </p>

        <ul className="text-left text-sm text-gray-600 max-w-xl mx-auto mb-6 list-disc list-inside">
          <li>Zkontrolujte, zda máte dostatek prostředků na kartě.</li>
          <li>Ujistěte se, že údaje o kartě byly zadány správně.</li>
          <li>Zkuste použít jinou platební metodu nebo kartu.</li>
          <li>Pokud problém přetrvává, kontaktujte nás na <a className="text-blue-600 underline" href="/contact">zákaznické podpoře</a>.</li>
        </ul>

        <div className="flex justify-center gap-4">
          <Link to="/cart">
            <Button variant="outline">Zkusit znovu</Button>
          </Link>
          <Link to="/urnspanel">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Pokračovat v prohlížení
            </Button>
          </Link>
        </div>

        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded mt-8 max-w-2xl mx-auto">
          <p>
            Pokud máte jakékoli dotazy, neváhejte nás kontaktovat na
            <a href="mailto:info@eternia.cz?subject=Problém%20s%20platbou" className="underline ml-1">urny@eternia.cz</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
