import React, { useEffect, useState } from "react";
import { deleteForm } from "@/models/Form";
import { Trash2 } from "lucide-react";
import io from "socket.io-client";

// Připojení k backendu na portu 4000
const socket = io("http://localhost:4000");

export default function Form() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    loadForms();

    // Posloucháme na nové formuláře přes Socket.io
    socket.on("newForm", (newForm) => {
      console.log("Nový formulář přijat přes Socket.io:", newForm);
      setForms((prevForms) => [newForm, ...prevForms]); // Přidání nového formuláře do seznamu
    });

    return () => {
      socket.off("newForm"); // Odpojení při odchodu ze stránky
    };
  }, []);

  const loadForms = async () => {
    fetch("http://localhost:4000/form")
      .then((res) => res.json())
      .then((data) => setForms(data))
      .catch((err) => console.error("Chyba při načítání formulářů:", err));
  };

  const handleDelete = async (formId) => {
    const formsreq = await deleteForm(formId);
    if (formsreq.status === 200) {
      setForms(forms.filter((form) => form._id !== formId));
    }
  };

  return (
    <div className="grid_background min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Admin Panel – Přijaté formuláře
        </h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {forms.length > 0 ? (
            forms.map((form) => (
              <div key={form._id} className="border-b py-4">
                <p>
                  <strong>Jméno:</strong> {form.name}
                </p>
                <p>
                  <strong>E-mail:</strong> {form.email}
                </p>
                <p>
                  <strong>Zpráva:</strong> {form.message}
                </p>
                <p className="text-gray-500 text-sm">
                  Odesláno: {new Date(form.createdAt).toLocaleString()}
                </p>
                <Trash2
                  className="cursor-pointer"
                  onClick={() => handleDelete(form._id)}
                />
              </div>
            ))
          ) : (
            <p>Žádné formuláře zatím nebyly odeslány.</p>
          )}
        </div>
      </div>
    </div>
  );
}
