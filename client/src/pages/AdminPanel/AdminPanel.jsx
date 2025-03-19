import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthContext } from "../../../src/context/AuthContext"; // Ověř správnou cestu
import { PackageOpen, Cylinder, ArrowDown, BookOpen, Pilcrow, Rows3 } from "lucide-react";
import classNames from "classnames";

export default function AdminPanel() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/adminLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: enteredPassword }),
      });

      const data = await response.json();

      if (data.success && data.token) {
        login(data.token); // Uloží token do contextu
      } else {
        alert("Nesprávné admin heslo!");
      }
    } catch (error) {
      console.error("Chyba při komunikaci se serverem:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold mb-4">Zadejte admin heslo</h1>
        <input
          type="password"
          className="border p-2 mb-2"
          placeholder="Admin heslo"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Přihlásit se</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
      <div className={classNames("container flex flex-col gap-2 justify-center items-center mx-auto")}>
        <Link to={"/createurn"} className="flex items-center">
          <Button className="bg-red-950 hover:bg-red-900 text-lg py-4 px-6">
            <PackageOpen className="mr-2" />
            Create urn
          </Button>
        </Link>
        <Link to={"/urns"} className="flex items-center">
          <Button className="text-lg py-4 px-6">
            <Cylinder className="mr-2" />
            Urns
          </Button>
        </Link>
        <Link to={"/form"} className="flex items-center">
          <Button className="text-lg py-4 px-6 bg-blue-500 hover:bg-blue-400">
            <BookOpen className="mr-2" />
            Form
          </Button>
        </Link>
        <Link to={"/blogadmin"} className="flex items-center">
          <Button className="text-lg py-4 px-6 bg-green-500 hover:bg-green-400">
            <Pilcrow className="mr-2" />
            Blog
          </Button>
        </Link>
        <Link to={"/poptavkaadmin"} className="flex items-center">
          <Button className="text-lg py-4 px-6 bg-orange-500 hover:bg-orange-400">
            <Rows3 className="mr-2" />
            Poptávky
          </Button>
        </Link>
        <Link to={"/"} className="flex items-center">
          <Button className="text-lg py-4 px-6 bg-gray-500 hover:bg-gray-400">
            <ArrowDown className="mr-2" />
            Main page
          </Button>
        </Link>
        <Button onClick={logout} className="bg-red-500 hover:bg-red-400 mt-4">Odhlásit se</Button>
      </div>
    </div>
  );
}
