import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Přidáno pro lepší UX při načítání

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        try {
          const response = await fetch("http://localhost:3000/admin/protected", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await response.json();
          if (data.success) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("adminToken");
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error("Chyba při ověřování tokenu:", error);
          localStorage.removeItem("adminToken");
          setIsAuthenticated(false);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div>Načítání...</div>; // Zabrání blikání přihlašovací stránky
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
