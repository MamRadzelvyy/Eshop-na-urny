import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Header from "@/components/Header";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const userId = decoded.userId;

        const res = await axios.get(
          `http://localhost:4000/api/orders/user/${userId}`,
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );

        setOrders(
          Array.isArray(res.data)
            ? res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Nejnovější nahoře
            : []
        );
        
      } catch (error) {
        console.error("Chyba při načítání objednávek", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Moje objednávky</h2>

        {loading ? (
          <p className="text-center text-gray-600">Načítám...</p>
        ) : orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="rounded-2xl shadow-md bg-white p-5 border border-gray-200"
              >
                <h3 className="text-sm text-gray-500 mb-4">
                  ID objednávky:{" "}
                  <span className="font-mono text-xs text-gray-700">{order._id}</span>
                </h3>

                <div className="space-y-4">
                  {order.products.map((product, i) => (
                    <div
                      key={i}
                      className="flex items-center sm:items-start gap-4 sm:gap-6 border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <Link to={`/urny/${product.productId}`} className="w-16 sm:w-20 shrink-0">
                        <img
                          src={product.imagePath}
                          alt={product.name}
                          className="rounded-lg border w-full h-auto object-contain"
                        />
                      </Link>
                      <div className="flex flex-col text-left flex-grow">
                        <Link
                          to={`/urny/${product.productId}`}
                          className="text-blue-600 hover:underline font-semibold text-sm sm:text-base"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm text-gray-600">
                          {product.quantity}×{" "}
                          {new Intl.NumberFormat("cs-CZ", {
                            style: "currency",
                            currency: "CZK",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(product.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-right font-semibold text-gray-800 mt-6">
                  Celkem:{" "}
                  {new Intl.NumberFormat("cs-CZ", {
                    style: "currency",
                    currency: "CZK",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(order.totalPrice)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Zatím nemáš žádné objednávky.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
