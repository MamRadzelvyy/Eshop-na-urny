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
      <h1>Main page</h1>
      <div className={classNames("container flex flex-col gap-2 justify-center items-center mx-auto", style.edafon)}>
        <Button className="bg-red-950 hover:bg-red-900 hover:">
          <Link to={"/createurn"} className="flex">
            <PackageOpen className="mr-2" />
            Create urn
          </Link>
        </Button>

        <Button className="">
          <Link to={"/urns"} className="flex">
            <Cylinder className="mr-2" />
            Urns
          </Link>
        </Button>
      </div>
    </>
  );
}
