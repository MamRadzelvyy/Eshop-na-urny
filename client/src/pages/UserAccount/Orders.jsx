import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Header from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  const userId = jwtDecode(token).userId;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/orders/user/${userId}`, { headers: { 'x-auth-token': token } });
        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Chyba při načítání objednávek", error);
        setOrders([]);
      }
    };
  
    fetchOrders();
  }, [userId, token]);
  

  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6">Moje objednávky</h2>
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order._id} className="border p-4 mb-4 rounded">
              <h3 className="font-semibold">ID objednávky: {order._id}</h3>
              <ul className="mt-2">
                {order.products.map(product => (
                  <li key={product._id}>{product.name} × {product.quantity}</li>
                ))}
              </ul>
              <p className="mt-2 font-medium">Celkem: {order.totalPrice} Kč</p>
            </div>
          ))
        ) : (
          <p>Zatím nemáš žádné objednávky.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
