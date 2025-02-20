import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";

export default function Cooperation() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="bg-gray-300 h-[1px] w-full" />
          <h1 className="text-4xl font-bold text-center flex-none my-auto">
            Spolupráce
          </h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>

        <Card className="shadow-xl rounded-2xl p-6">
          <CardContent>
            <p className="text-2xl font-bold mb-1">
              Hledáte partnera pro dlouhodobou a spolehlivou spolupráci?
            </p>
            <p className="text-lg mb-4">
              Rádi bychom Vám nabídli možnost navázat spolupráci s naším
              podnikem v oblasti velkoobchodního prodeje, výroby na míru a
              zakázkové personalizace produktů. Naší specializací je poskytování
              kvalitních a individuálně přizpůsobených výrobků, které splňují
              potřeby našich klientů ve specifických oblastech.
            </p>
            <p className="text-2xl font-bold mb-1">
              Naše spolupráce s pohřebními službami, krematorii a dodavateli:
            </p>
            <p className="text-lg mb-4">
              Máme bohaté zkušenosti ve spolupráci s pohřebními službami,
              krematorii a dalšími partnery, kteří sdílejí naši vizi kvality a
              úcty k zesnulým. Věříme, že každá služba v této oblasti by měla
              být vykonávána s maximální úctou, profesionalitou a ohledem na
              potřeby pozůstalých. Naše produkty a služby jsou navrženy tak, aby
              vyhovovaly těmto náročným požadavkům, a to jak z hlediska designu,
              tak i funkčnosti.
            </p>

            <p className="text-lg mb-4 font-semibold">
              <strong>Naše nabídka:</strong>
            </p>

            <ul className="list-inside list-disc pl-6 text-lg mb-4">
              <li>
                <strong>Velkoobchodní prodej:</strong> Nabízíme širokou škálu
                kvalitních produktů pro pohřební služby a krematoria. Naši
                obchodní partneři mohou využít výhod konkurenčně výhodných cen a
                pravidelných dodávek.
              </li>
              <li>
                <strong>Výroba na míru:</strong> Jsme schopni vyrobit produkty
                podle specifických požadavků klienta. Ať už jde o
                personalizované výrobky pro jednotlivce nebo pro specifické
                potřeby pohřební služby, naše nabídka je velmi flexibilní a
                přizpůsobitelná.
              </li>
              <li>
                <strong>Zakázková personalizace:</strong> Naše zakázkové
                produkty zahrnují personalizaci, která zaručuje unikátní a
                osobní přístup. Nabízíme různé možnosti přizpůsobení, od
                gravírování až po výběr materiálů a designu.
              </li>
            </ul>

            <p className="text-2xl font-bold mb-1">Proč si vybrat nás?</p>
            <p className="text-lg mb-4">
              Náš přístup je založen na kvalitě, spolehlivosti a dlouhodobé
              spolupráci. Chceme být partnerem, na kterého se můžete vždy
              spolehnout.
            </p>
            <p className="text-2xl font-bold mb-1">Kontaktujte nás:</p>
            <p className="text-lg">
              Pokud máte zájem o více informací nebo byste chtěli probrat
              možnosti spolupráce, neváhejte nás kontaktovat. Rádi Vám
              poskytneme všechny potřebné informace a domluvíme si osobní
              schůzku, kde rádi probereme všechny podrobnosti a možnosti naší
              spolupráce.
            </p>
          </CardContent>
        </Card>
  <Contacts/>
      </div>
      <Footer />
    </>
  );
}
