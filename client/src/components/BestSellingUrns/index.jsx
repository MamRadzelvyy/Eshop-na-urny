import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getUrns } from "../../models/Urn";

export default function BestSellingUrns() {
  const [topUrns, setTopUrns] = useState([]);

  useEffect(() => {
    const loadTopUrns = async () => {
      const data = await getUrns();
      if (data.status === 200) {
        const filteredUrns = data.payload
          .filter((urn) => urn.top === "TOP") // 🔥 Bere jen ty s "TOP"
          .filter((urn) => urn.for === "Lidská")
          .sort(() => Math.random() - 0.5) // 🔀 Náhodně zamíchá pořadí
          .slice(0, 4); // 🔥 Vybere max 4 různé urny

        setTopUrns(filteredUrns);
      }
    };
    loadTopUrns();
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold mt-8 text-center">Nejprodávanější</h3>

      {topUrns.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">Žádné doporučené urny</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {topUrns.map((urn) => (
            <Card key={urn._id} className="p-4">
              <CardContent className="flex flex-col items-center">
                <img
                  src={urn.imagePath}
                  alt={urn.name}
                  className="max-w-40 max-h-40 mx-auto object-contain rounded-lg mb-2"
                />
                <p className="mt-2 font-medium text-center">{urn.name}</p>
                <p className="text-lg font-semibold text-gray-700">
                  {new Intl.NumberFormat("cs-CZ", {
                    style: "currency",
                    currency: "CZK",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(urn.price)}
                </p>
                <Link to={`/urny/${urn._id}`}>
                  <Button className="mt-2  bg-gray-700 text-white">Ukaž!</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
