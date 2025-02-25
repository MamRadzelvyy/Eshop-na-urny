import React from "react";
import { Star, Palette, Award, } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold  text-slate-700 mb-3">
            O nákupu
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/doba-dodani-zbozi">Doba dodání zboží</Link>
            </li>
            <li>
              <Link to="/moznosti-doruceni">Možnosti doručení</Link>
            </li>
            <li>
              <Link to="/moznosti-platby">Možnosti platby</Link>
            </li>
            <li>
              <Link to="/caste-dotazy">Časté dotazy</Link>
            </li>
            <li>
              <Link to="/vraceni-a-reklamace">Vrácení a reklamace</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold  text-slate-700 mb-3">
            O společnosti
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/about">O nás</Link>
            </li>
            <li>
              <Link to="/contact">Kontakty</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/poptavka">Poptávka</Link>
            </li>
            <li>
              <Link to="/vydejny-eshop">Výdejny e-shopu</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-700 mb-3">  
            Právní informace
          </h3>
          <ul className="space-y-2 text-gray-600">
          <li>
              <Link to="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
            </li>
            <li>
              <Link to="/dodatek-ke-zpracovani-dat">Dodatek ke zpracování dat</Link>
            </li>
            <li>
              <Link to="/obchodni-podminky">Obchodní podmínky</Link>
            </li>
            <li>
              <Link to="/dokumenty-ke-stazeni">Dokumenty ke stažení</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Benefit
            icon={<Star size={24} className=" text-slate-700" />}
            title="Rozmanitý sortiment"
          >
            V naší nabídce najdete širokou škálu unikátních modelů.
          </Benefit>
          <Benefit
            icon={<Award size={24} className=" text-slate-700" />}
            title="Dlouholetá zkušenost"
          >
            Jsme tu pro vás již od roku 2006.
          </Benefit>
        </div>
      </div>
    </footer>
  );
}

// Komponenta pro benefity s ikonami
function Benefit({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4 p-3 bg-white shadow-sm rounded-xl">
      <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm ">{children}</p>
      </div>
    </div>
  );
}
