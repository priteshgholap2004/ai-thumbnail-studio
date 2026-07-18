import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    getProfile,
    loginUser,
    logoutUser,
    registerUser,
} from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Check if user already logged in
    const checkAuth = async () => {
        try {
            const res = await getProfile();

            if (res) {
                setUser(res.user);
            } else {
                setUser(null);
            }

        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    //login
    const login = async (data) => {
        const res = await loginUser(data);
        await checkAuth();
        return res;
    };

    //register
    const register = async (data) => {
        const res = await registerUser(data);
        await checkAuth();
        return res;
    };

    //logout
    const logout = async () => {
        await logoutUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);