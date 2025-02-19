import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PackageOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Ekologická urna Mandala</h2>
            <p className="text-gray-600">Na výběr z několika variant</p>
            <Button className="mt-4">Zobrazit více</Button>
          </div>
          <img
            src="/path/to/image.jpg"
            alt="Ekologická urna Mandala"
            className="w-64 rounded-lg"
          />
        </div>

        <h3 className="text-xl font-semibold mt-8 text-center">
          Doporučené kategorie
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {[
            "Ekologické urny",
            "Kovové urny",
            "Keramické urny",
            "Kamenné urny",
            "Betonové urny",
            "Dřevěné urny",
          ].map((category, index) => (
            <Card key={index} className="flex flex-col items-center p-4">
              <CardContent className="text-center">
                <p className="font-medium">{category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button variant="outline">Zobrazit více</Button>
        </div>

        <h3 className="text-xl font-semibold mt-8 text-center">
          Nejprodávanější
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="p-4">
              <CardContent className="flex flex-col items-center">
                <PackageOpen size={48} />
                <p className="mt-2 font-medium">Produkt {item}</p>
                <Button className="mt-2">Detail</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
