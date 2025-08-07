import axios from "axios";
import appConfig from "../constant/appConfig";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [_id, set_Id] = useState(null);
  const [loading, setLoading] = useState(false);

  const verifyAuth = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        appConfig.apiBaseUrl + "api/auth/verifyToken",
        { withCredentials: true },
      );
      setIsAuthenticated(true);
      set_Id(res.data._id);
    } catch (err) {
      setIsAuthenticated(false);
      set_Id(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, verifyAuth, loading, _id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
