import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PackageOpen, Cylinder } from "lucide-react";
import classNames from "classnames";
import { ArrowDown, BookOpen, Pilcrow  } from 'lucide-react';

export default function AdminPanel() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
        <div
          className={classNames(
            "container flex flex-col gap-2 justify-center items-center mx-auto"
          )}
        >
          <Button className="bg-red-950 hover:bg-red-900 text-lg py-4 px-6">
            <Link to={"/createurn"} className="flex items-center">
              <PackageOpen className="mr-2" />
              Create urn
            </Link>
          </Button>
          <Button className="text-lg py-4 px-6">
            <Link to={"/urns"} className="flex items-center">
              <Cylinder className="mr-2" />
              Urns
            </Link>
          </Button>
          <Button className="text-lg py-4 px-6 bg-blue-500 hover:bg-blue-400">
            <Link to={"/form"} className="flex items-center">
              <BookOpen className="mr-2" />
              Form
            </Link>
          </Button>
          <Button className="text-lg py-4 px-6 bg-green-500 hover:bg-green-400">
            <Link to={"/blogadmin"} className="flex items-center">
              <Pilcrow className="mr-2" />
              Blog
            </Link>
          </Button>
          <Button className="text-lg py-4 px-6 bg-gray-500 hover:bg-gray-400">
            <Link to={"/"} className="flex items-center">
              <ArrowDown className="mr-2" />
              Main page
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
