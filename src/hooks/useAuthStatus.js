import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuthStatus() {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const handleVerify = async (e) => {
      setLoading(true);
      console.log("handleVerify");
      try {
        await axios.get(
          "https://resumakebackend.onrender.com/api/auth/verifyToken",
          {
            withCredentials: true, // 👈 send and receive cookies
          },
        );
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    handleVerify();
  }, []);
  return { isAuthenticated, loading };
}
