import { useState } from "react";
import UrnaLogo from "../../assets/images/Urna-Logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={UrnaLogo}
              className="mr-3 h-6 sm:h-9"
              alt="Eternia logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Eternia
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to="/login">
              <Button className="bg-transparent text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                Přihlásit se
              </Button>
            </Link>
            <Link
              to="/register"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Registrace
            </Link>
            <DropdownMenu>
  <DropdownMenuTrigger className="relative p-3 transition-transform hover:scale-110 focus:outline-none">
    <ShoppingCart size={22} className="text-gray-600 dark:text-gray-300 hover:text-blue-500" />
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
      0
    </span> 
  </DropdownMenuTrigger>
  
  <DropdownMenuContent
    asChild
    className="text-center flex items-center justify-center flex-col p-5 gap-3 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center"
    >
      <ShoppingBasket size={40} className="text-gray-500 dark:text-gray-400" />
      <span className="text-gray-600 dark:text-gray-300 text-sm">Váš košík je prázdný</span>
      <Link to="/cart">
      <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
        Zobrazit produkty
      </Button>
      </Link>
    </motion.div>
  </DropdownMenuContent>
</DropdownMenu>

<Button
  data-collapse-toggle="mobile-menu-2"
  type="button"
  className="bg-transparent inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  aria-controls="mobile-menu-2"
  aria-expanded="false"
  onClick={toggleVisibility}
>
  <Menu className="w-6 h-6" />
</Button>

          </div>
          <div
            className={`${
              isHidden ? "hidden" : "flex"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
            onClick={toggleVisibility}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full">
              <li>
                <Link
                  to="/urnspanel"
                  className=" group flex justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <p>Urny </p>
                  <ArrowRight className="hidden group-hover:block lg:group-hover:hidden lg:hidden" />
                </Link>
              </li>
              <li>
                <Link
                  to="/animalurns"
                  className=" group flex justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <p>Zvířecí urny</p>
                  <ArrowRight className="hidden group-hover:block lg:group-hover:hidden lg:hidden" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" group flex justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <p>O nás</p>
                  <ArrowRight className="hidden group-hover:block lg:group-hover:hidden lg:hidden" />
                </Link>
              </li>
              <li>
                <Link
                  to="/cooperation"
                  className=" group flex justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <p>Spolupráce</p>
                  <ArrowRight className="hidden group-hover:block lg:group-hover:hidden lg:hidden" />
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className=" group flex justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <p>Blog</p>
                  <ArrowRight className="hidden group-hover:block lg:group-hover:hidden lg:hidden" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" group flex justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <p>Kontakty</p>
                  <ArrowRight className="hidden group-hover:block lg:group-hover:hidden lg:hidden" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
