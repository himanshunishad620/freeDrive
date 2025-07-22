import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null means loading
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const verifyAuth = useCallback(async () => {
    setLoading(true);
    try {
      await axios.get(
        "https://resumakebackend.onrender.com/api/auth/verifyToken",
        { withCredentials: true },
      );
      setIsAuthenticated(true);
      //       setUser(res.data.user);
    } catch (err) {
      setIsAuthenticated(false);
      //       setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyAuth(); // Run once on mount
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, verifyAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
