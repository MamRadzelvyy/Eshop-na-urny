import React from "react";
import classNames from "classnames";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="bg-gray-300 h-[1px] w-full" />
          <h1 className="text-4xl font-bold text-center flex-none my-auto h-full">
            O nás
          </h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>
        <Card className="shadow-xl rounded-2xl p-6">
          <CardContent>
            <p className="text-lg mb-4">
              Eternia je specializovaný e-shop zaměřený na kvalitní urny, které
              pomáhají uchovat důstojnou památku na vaše blízké. Od našeho
              založení se snažíme poskytovat široký výběr uren, které spojují
              eleganci, kvalitu a úctu k zesnulým.
            </p>
            <p className="text-lg mb-4">
              V naší nabídce najdete urny vyrobené z různých materiálů, včetně
              keramiky, kovu, dřeva, skla a ekologických variant. Každý produkt
              je navržen s důrazem na detail, aby splňoval jak estetické, tak
              funkční požadavky.
            </p>
            <p className="text-lg mb-4">
              Chápeme, že výběr urny je osobní záležitost, a proto se snažíme
              nabídnout širokou škálu designů – od tradičních a elegantních
              modelů až po moderní a umělecké kousky. Naším cílem je, aby si
              každý zákazník našel urnu, která bude odpovídat jeho představám a
              bude důstojnou vzpomínkou.
            </p>
            <p className="text-lg mb-4">
              Téměř všechny naše urny jsou uzpůsobeny pro úřední plastové vložky
              z krematorií v České a Slovenské republice. Nabízíme také možnost
              gravírování nebo mosazných štítků pro personalizaci.
            </p>
            <p className="text-lg">
              Děkujeme, že jste si vybrali Eternia – místo, kde vzpomínky
              přetrvávají.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
