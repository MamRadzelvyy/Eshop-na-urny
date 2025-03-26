import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Payment() {
  const cartItems = useSelector((state) => state.cart?.items || []);

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/create-checkout-session', {
        items: cartItems,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Chyba při vytváření platby:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Platba</h1>
        <p className="text-gray-600 mb-6">Po kliknutí na tlačítko budeš přesměrován do bezpečné platební brány Stripe.</p>

        <Button
          onClick={handleCheckout}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg"
        >
          Přejít na platbu
        </Button>
      </div>
      <Footer />
    </>
  );
}
