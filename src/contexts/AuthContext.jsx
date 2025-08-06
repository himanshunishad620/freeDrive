import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import appConfig from "../constant/appConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // null means loading
  const [_id, set_Id] = useState(null);
  const [loading, setLoading] = useState(false);

  const verifyAuth = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        appConfig.apiBaseUrl + "api/auth/verifyToken",
        { withCredentials: true },
      );
      // console.log(res.data);
      setIsAuthenticated(true);
      set_Id(res.data._id);
      // setUser(res.data.user);
    } catch (err) {
      setIsAuthenticated(false);
      //       setUser(null);
      set_Id(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyAuth(); // Run once on mount
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, verifyAuth, loading, _id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
