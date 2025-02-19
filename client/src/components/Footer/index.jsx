import React from "react";
import { Star, Palette, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            O nákupu
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#">Doba dodání zboží</Link>
            </li>
            <li>
              <Link to="#">Možnosti doručení</Link>
            </li>
            <li>
              <Link to="#">Možnosti platby</Link>
            </li>
            <li>
              <Link to="#">Jak správně vybrat urnu</Link>
            </li>
            <li>
              <Link to="#">Časté dotazy</Link>
            </li>
            <li>
              <Link to="#">Vrácení a reklamace</Link>
            </li>
            <li>
              <Link to="#">Ochrana osobních údajů</Link>
            </li>
            <li>
              <Link to="#">Dodatek ke zpracování dat</Link>
            </li>
            <li>
              <Link to="#">Obchodní podmínky</Link>
            </li>
            <li>
              <Link to="#">Dokumenty ke stažení</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            O společnosti
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#">O nás</Link>
            </li>
            <li>
              <Link to="#">Kontakty</Link>
            </li>
            <li>
              <Link to="#">Poradna</Link>
            </li>
            <li>
              <Link to="#">Poptávka</Link>
            </li>
            <li>
              <Link to="#">Výdejny e-shopu</Link>
            </li>
            <li>
              <Link to="#">Udržitelnost ekologických uren</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            Vše k partnerům
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#">Velkoobchod</Link>
            </li>
            <li>
              <Link to="#">Katalogy</Link>
            </li>
            <li>
              <Link to="#">Letáky</Link>
            </li>
            <li>
              <Link to="#">Registrace</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Benefit
            icon={<Star size={24} className="text-green-700" />}
            title="Rozmanitý sortiment"
          >
            V naší nabídce najdete širokou škálu unikátních modelů.
          </Benefit>
          <Benefit
            icon={<Palette size={24} className="text-green-700" />}
            title="Moderní a inovativní design"
          >
            Pravidelně přinášíme nejnovější trendy v oblasti pohřebnictví.
          </Benefit>
          <Benefit
            icon={<Award size={24} className="text-green-700" />}
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
