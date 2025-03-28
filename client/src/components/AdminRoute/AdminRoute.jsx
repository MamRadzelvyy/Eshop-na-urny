import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminRoute() {
  const [isAdmin, setIsAdmin] = useState(() => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
      const decoded = jwtDecode(token);
      return decoded.isAdmin;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "token") {
        const token = event.newValue;
        if (!token) {
          setIsAdmin(false);
          return;
        }

        try {
          const decoded = jwtDecode(token);
          setIsAdmin(decoded.isAdmin);
        } catch {
          setIsAdmin(false);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isAdmin ? <Outlet /> : <Navigate to="/404" replace />;
}