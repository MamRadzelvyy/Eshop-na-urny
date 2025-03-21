import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Funkce pro odhlášení
  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  // Ověření tokenu (běží při načtení a pak každých 10s)
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");

      if (token) {
        try {
          const response = await fetch("http://localhost:3000/admin/protected", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

          const data = await response.json();

          if (data.success) {
            setIsAuthenticated(true);
          } else {
            logout();
          }
        } catch (error) {
          console.error("🚨 Chyba při ověřování tokenu:", error);
          logout();
        }
      } else {
        logout();
      }

      setLoading(false);
    };

    checkAuth();

    const interval = setInterval(checkAuth, 10000);
    return () => clearInterval(interval);
  }, []);

  // Přesměrování nepřihlášeného uživatele
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/adminpanel");
    }
  }, [isAuthenticated, loading, navigate]);

  // ⚡ Realtime login/logout mezi tably
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "adminToken") {
        if (event.newValue === null) {
          setIsAuthenticated(false); // logout
        } else {
          setIsAuthenticated(true); // login
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Funkce pro přihlášení
  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setIsAuthenticated(true);
  };

  if (loading) {
    return <div>Načítání...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
