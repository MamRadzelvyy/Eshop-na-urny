import React, { useEffect, useState } from "react";
import { deletePoptavka } from "@/models/Poptavka";
import { Trash2 } from "lucide-react";
import io from "socket.io-client";

// Připojení k backendu na portu 4000
const socket = io("http://localhost:4000");

export default function PoptavkaAdmin() {
  const [poptavkas, setPoptavkas] = useState([]);

  useEffect(() => {
    loadPoptavkas();

    // Posloucháme na nové poptávky přes Socket.io
    socket.on("newPoptavka", (newPoptavka) => {
      console.log("Nová poptávka přijata přes Socket.io:", newPoptavka);
      setPoptavkas((prevPoptavkas) => [newPoptavka, ...prevPoptavkas]); // Přidání nové poptávky do seznamu
    });

    return () => {
      socket.off("newPoptavka"); // Odpojení při odchodu ze stránky
    };
  }, []);

  const loadPoptavkas = async () => {
    fetch("http://localhost:4000/poptavka")
      .then((res) => res.json())
      .then((data) => setPoptavkas(data))
      .catch((err) => console.error("Chyba při načítání poptávek:", err));
  };

  const handleDelete = async (poptavkaId) => {
    const poptavkasreq = await deletePoptavka(poptavkaId);
    if (poptavkasreq.status === 200) {
      setPoptavkas(poptavkas.filter((poptavka) => poptavka._id !== poptavkaId));
    }
  };

  return (
    <div className="grid_background min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Admin Panel – Přijaté poptávky
        </h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {poptavkas.length > 0 ? (
            poptavkas.map((poptavka) => (
              <div key={poptavka._id} className="border-b py-4">
                <p>
                  <strong>Jméno:</strong> {poptavka.name}
                </p>
                <p>
                  <strong>E-mail:</strong> {poptavka.email}
                </p>
                <p>
                  <strong>Číslo:</strong> {poptavka.telnumber}
                </p>
                <p>
                  <strong>Zpráva:</strong> {poptavka.message}
                </p>
                <p className="text-gray-500 text-sm">
                  Odesláno: {new Date(poptavka.createdAt).toLocaleString()}
                </p>
                <Trash2
                  className="cursor-pointer"
                  onClick={() => handleDelete(poptavka._id)}
                />
              </div>
            ))
          ) : (
            <p>Žádné poptávky zatím nebyly odeslány.</p>
          )}
        </div>
      </div>
    </div>
  );
}
