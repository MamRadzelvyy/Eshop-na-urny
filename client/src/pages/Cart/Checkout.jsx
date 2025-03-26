import React from 'react';
import { useSelector } from 'react-redux';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Objednávka</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Jméno a příjmení</label>
            <input type="text" className="border rounded px-4 py-2" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">E-mail</label>
            <input type="email" className="border rounded px-4 py-2" required />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-semibold">Adresa</label>
            <input type="text" className="border rounded px-4 py-2" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">PSČ</label>
            <input type="text" className="border rounded px-4 py-2" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Město</label>
            <input type="text" className="border rounded px-4 py-2" required />
          </div>
        </form>

        <h2 className="text-2xl font-bold mb-4">Shrnutí objednávky</h2>
        <ul className="divide-y divide-gray-200 mb-6">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-3">
              <div className="flex items-center gap-4">
                <img
                  src={item.imagePath}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded border"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.quantity}× {item.price} Kč</p>
                </div>
              </div>
              <p className="text-right font-semibold">
                {item.quantity * item.price} Kč
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center text-lg font-bold mb-6">
          <span>Celkem</span>
          <span>{new Intl.NumberFormat("cs-CZ", {
            style: "currency",
            currency: "CZK",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(totalPrice)}</span>
        </div>

        <Link to="/payment">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 w-full text-base">
            Přejít k placení
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
