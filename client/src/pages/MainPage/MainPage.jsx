import style from "./MainPage.module.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PackageOpen, Cylinder } from "lucide-react";
import classNames from "classnames";
import Header from "@/components/Header";

export default function MainPage() {
  return (
    <>
    <Header />
      <h1>Hlavní stránka</h1>
    </>
  );
}
