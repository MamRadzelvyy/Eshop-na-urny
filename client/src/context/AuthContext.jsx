import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Přidáme pro přesměrování

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Použití hooku pro přesměrování

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        try {
          const response = await fetch("http://localhost:3000/admin/protected", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          }

          const data = await response.json();
          if (data.success) {
            setIsAuthenticated(true);
          } else {
            logout(); // 🔥 Automaticky odhlásíme uživatele
          }
        } catch (error) {
          console.error("Chyba při ověřování tokenu:", error);
          logout(); // 🔥 Když token není platný, odhlásíme uživatele
        }
      }
      setLoading(false);
    };

    checkAuth();

    // Automatické ověřování každých 10 sekund
    const interval = setInterval(checkAuth, 10000);
    return () => clearInterval(interval);
  }, []);

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
    navigate("/adminpanel"); // 🔥 Přesměrujeme uživatele na hlavní stránku
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
