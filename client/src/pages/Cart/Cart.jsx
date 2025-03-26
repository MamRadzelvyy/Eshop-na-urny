import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/cartSlice';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Váš košík</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Košík je prázdný.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-4">
  <div className="flex items-center gap-4">
    <img src={item.imagePath} alt={item.name} className="w-16 h-16 object-contain rounded border" />
    <div>
      <h2 className="font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-500">{item.quantity}× {item.price} Kč</p>
    </div>
  </div>
  <Button
    variant="outline"
    onClick={() => dispatch(removeFromCart(item._id))}
  >
 <X className="text-red-500 hover:text-red-600 transition"/>
  </Button>
</li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
  <p className="text-lg font-semibold">
    Celkem: {new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(totalPrice)}
  </p>

  <div className="flex gap-4">
    <Button variant="destructive" onClick={() => dispatch(clearCart())}>
      Vyprázdnit košík
    </Button>
    <Link to="/checkout">
    <Button className="bg-green-600 text-white px-6 py-3 hover:bg-green-700">
      Pokračovat v objednávce
    </Button>
    </Link>
  </div>
</div>

          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
