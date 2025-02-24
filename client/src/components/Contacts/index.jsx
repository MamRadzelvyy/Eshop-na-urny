import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacts() {
  return (
    <>
    <h2 className="text-2xl font-semibold mt-8 text-center">Kontakty</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <Card className="shadow-lg rounded-xl p-4 flex items-center justify-center">
        <CardContent className="flex flex-col gap-3 !p-0">
          <p className="flex items-center gap-2">
            <Mail size={20} className="text-primary" />
            urny@eternia.cz
          </p>
          <p className="flex items-center gap-2">
            <Phone size={20} className="text-primary" />
            +420 123 456 789
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={20} className="text-primary" />
            Národní 12, Praha, Česká republika
          </p>
        </CardContent>
      </Card>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-48 md:h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.392207671207!2d14.418540676771832!3d50.080693171564106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a4f56b41e7%3A0xa4f2c4d4e3549b69!2sN%C3%A1rodn%C3%AD%2012%2C%20110%2000%20Star%C3%A9%20M%C4%9Bsto!5e0!3m2!1sen!2scz!4v1649949952975!5m2!1sen!2scz"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div className="text-center mt-20">
      <a href="mailto:urny@eternia.cz?subject=Spolupráce">
        <Button className="px-6 py-2 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Napsat e-mail</Button>
      </a>
    </div>
  </>
  )
}
