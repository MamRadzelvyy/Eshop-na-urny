import React from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Jak dlouho trvá doručení objednávky?",
    answer: "Doručení obvykle trvá 3–5 pracovních dnů v rámci ČR a 5–7 pracovních dnů pro Slovensko. V případě personalizovaných objednávek, jako je gravírování nebo výroba na zakázku, se může dodací lhůta prodloužit až na 10 pracovních dnů. Pokud potřebujete expresní doručení, doporučujeme nás kontaktovat předem."
  },
  {
    question: "Jaké materiály používáte pro výrobu uren?",
    answer: "Naše urny jsou vyrobeny z různých materiálů, včetně keramiky, kovu, dřeva, skla a ekologických materiálů. Každý materiál má své výhody – například keramika nabízí elegantní vzhled, zatímco ekologické urny jsou šetrné k životnímu prostředí a biologicky rozložitelné."
  },
  {
    question: "Je možné si nechat urnu personalizovat?",
    answer: "Ano, nabízíme možnost personalizace uren gravírováním jména, datumu nebo krátkého vzkazu. Gravírování je prováděno laserovou technologií, což zajišťuje preciznost a dlouhou životnost nápisu. Pokud si přejete jiný typ personalizace, například speciální design, kontaktujte nás a rádi vám pomůžeme."
  },
  {
    question: "Jaké jsou možnosti platby?",
    answer: "Přijímáme platby kartou (VISA, Mastercard), bankovním převodem a dobírkou. U objednávek nad 5 000 Kč je možné sjednat splátkový kalendář. Platba kartou je nejrychlejší možností, zatímco bankovní převod může trvat až 2 pracovní dny."
  },
  {
    question: "Mohu vrátit zakoupenou urnu?",
    answer: "Ano, můžete ji vrátit do 14 dnů od doručení, pokud nebyla personalizována. Vrácení je možné pouze u nepoškozeného zboží v původním obalu. Náklady na dopravu při vrácení hradí zákazník, pokud se nejedná o výrobní vadu."
  },
  {
    question: "Jaké jsou možnosti dopravy?",
    answer: "Nabízíme doručení prostřednictvím České pošty, kurýrní služby PPL a osobní odběr na naší provozovně v Praze. V rámci Prahy poskytujeme i expresní doručení do 24 hodin."
  },
  {
    question: "Jak správně pečovat o urnu?",
    answer: "Péče o urnu závisí na materiálu. Kovové urny by měly být pravidelně otírány suchým hadříkem, aby se zabránilo oxidaci. Keramické urny lze otřít vlhkým hadříkem, ale je třeba se vyhnout agresivním čisticím prostředkům. Dřevěné urny je dobré jednou za čas přetřít speciálním voskem na dřevo."
  },
  {
    question: "Jak vybrat správnou urnu?",
    answer: "Výběr urny závisí na několika faktorech – zda má být urna umístěna doma, uložena na hřbitově nebo použita pro rozptyl. Pokud si nejste jisti, kontaktujte naši zákaznickou podporu, která vám s výběrem ráda pomůže."
  }
];

export default function CasteDotazy() {
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
            Časté dotazy
          </motion.h1>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>

        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-xl rounded-2xl p-6 mb-4 bg-white dark:bg-gray-800">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {faq.question}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
}