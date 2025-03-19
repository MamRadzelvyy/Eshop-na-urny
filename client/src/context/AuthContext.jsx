import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");
      console.log("🔍 Token v localStorage při načtení:", token); // ✅ Debug

      if (token) {
        try {
          const response = await fetch("http://localhost:3000/admin/protected", {
            headers: { Authorization: `Bearer ${token}` }, // ✅ Opraveno
          });

          console.log("📡 Odpověď serveru:", response.status); // ✅ Debug výpis

          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`); // ✅ Opraveno
          }

          const data = await response.json();
          console.log("📩 Data ze serveru:", data); // ✅ Debug výpis

          if (data.success) {
            console.log("✅ Token je platný! Zůstávám přihlášený.");
            setIsAuthenticated(true);
          } else {
            console.log("❌ Token není platný, odhlašuji...");
            logout();
          }
        } catch (error) {
          console.error("🚨 Chyba při ověřování tokenu:", error);
          logout();
        }
      } else {
        console.log("❌ Token nebyl nalezen!");
      }

      setLoading(false);
    };

    checkAuth();

    // Automatické ověřování každých 10 sekund
    const interval = setInterval(checkAuth, 10000);
    return () => clearInterval(interval);
  }, []);

  const login = (token) => {
    console.log("✅ Ukládám token:", token); // ✅ Debug výpis
    localStorage.setItem("adminToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log("🚪 Odhlášení: mažu token");
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
    navigate("/adminpanel"); 
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
