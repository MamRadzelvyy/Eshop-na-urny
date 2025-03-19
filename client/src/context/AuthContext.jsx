import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        console.log("Token nalezen:", token); // Debug

        try {
          const response = await fetch("http://localhost:3000/admin/protected", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          }

          const data = await response.json();
          console.log("Odpověď serveru:", data); // Debug

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
      } else {
        console.log("Token nenalezen");
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
    return <div>Načítání...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
