import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/cartSlice";
import { jwtDecode } from "jwt-decode";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderData, setOrderData] = useState({ amount: null, email: null, orderId: null });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = token ? jwtDecode(token).userId : null;

    if (!sessionId || !userId || !token) return;

    const fetchAndSaveOrder = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/session-details?session_id=${sessionId}`
        );
        const { email, amount, orderId } = response.data;
        setOrderData({ email, amount, orderId });

        const alreadySaved = localStorage.getItem(`order-saved-${orderId}`);
        if (!alreadySaved) {
          const totalPrice = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );

          await axios.post(
            "http://localhost:4000/api/save-order",
            {
              userId,
              products: cartItems,
              totalPrice,
              orderId,
            },
            {
              headers: {
                "x-auth-token": token,
              },
            }
          );

          localStorage.setItem(`order-saved-${orderId}`, "true");
          dispatch(clearCart());
        }
      } catch (error) {
        console.error("❌ Chyba při ukládání objednávky:", error);
      }
    };

    fetchAndSaveOrder();
  }, [sessionId]);

  const { amount, email, orderId } = orderData;

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="text-green-500 w-14 h-14" />
        </div>
        <h1 className="text-4xl font-bold text-green-600 mb-4">Platba úspěšná ✅</h1>
        <p className="text-gray-700 text-lg mb-6">
          Děkujeme za vaši objednávku. Brzy vás budeme kontaktovat.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left mb-8">
          <h2 className="text-xl font-semibold mb-4">Rekapitulace objednávky</h2>
          <p className="mb-2">
            <span className="font-medium">E-mail:</span> {email || "neuvedeno"}
          </p>
          <p className="mb-2">
            <span className="font-medium">Celková částka:</span>{" "}
            {amount
              ? `${new Intl.NumberFormat("cs-CZ", {
                  style: "currency",
                  currency: "CZK",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(amount)}`
              : "neuvedeno"}
          </p>
          <p>
            <span className="font-medium">ID objednávky:</span> {orderId || "neuvedeno"}
          </p>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Potvrzení platby bude také odesláno na váš e-mail. Pokud nedorazí do několika minut,
          zkontrolujte prosím složku se spamem nebo nás kontaktujte.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button variant="outline">Zpět na hlavní stránku</Button>
          </Link>
          <Link to="/urnspanel">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Pokračovat v nákupu</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
