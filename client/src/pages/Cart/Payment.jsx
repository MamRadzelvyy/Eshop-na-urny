import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Loader2 } from 'lucide-react';

export default function Payment() {
  const cartItems = useSelector((state) => state.cart.items);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      setError(false);

      const response = await axios.post('http://localhost:3000/api/create-checkout-session', {
        items: cartItems,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        throw new Error("URL nenalezena");
      }
    } catch (err) {
      console.error("Chyba při vytváření platby:", err);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      handleCheckout();
    } else {
      setIsLoading(false); // Pokud je košík prázdný, nespouštět automaticky
    }
  }, [cartItems]);

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Platba</h1>
        <p className="text-gray-600 mb-6">
          Přesměrováváme vás do bezpečné platební brány Stripe...
        </p>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
            <p className="text-sm text-gray-500">
              Pokud vás stránka automaticky nepřesměrovala, klikněte na tlačítko níže.
            </p>
          </div>
        ) : (
          <>
            {error && (
              <p className="text-red-600 text-sm mb-4">
                Nastala chyba při vytváření platby. Zkuste to prosím znovu.
              </p>
            )}
            <Button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg"
            >
              Přejít na platbu
            </Button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
