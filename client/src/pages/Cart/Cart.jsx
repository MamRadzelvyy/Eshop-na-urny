import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, ShoppingCart } from 'lucide-react';
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
  <div className="text-center py-20">
<ShoppingCart className="mx-auto w-16 h-16 text-gray-400 mb-4" />
    <h2 className="text-2xl font-semibold mb-2">Váš košík je prázdný</h2>
    <p className="text-gray-600 mb-6">Vypadá to, že jste si ještě nic nepřidali. Začněte prohlížet naši nabídku.</p>

    <div className="flex justify-center gap-4">
      <Link to="/urnspanel">
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Prohlédnout urny
        </Button>
      </Link>
      <Link to="/animalurns">
        <Button variant="outline"> Prohlédnout Zvířecí urny</Button>
      </Link>
    </div>
  </div>
) : (

          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li key={item._id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <img src={item.imagePath} alt={item.name} className="w-16 h-16 object-contain rounded border" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.price} Kč/ks</p>
                    <div className="flex items-center mt-1 gap-2">
                      <Button size="sm" variant="outline" onClick={() => dispatch(decreaseQuantity(item._id))}>−</Button>
                      <span className="px-2">{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => dispatch(increaseQuantity(item._id))}>+</Button>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => dispatch(removeFromCart(item._id))}
                >
                  <X className="text-red-500 hover:text-red-600 transition" />
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
