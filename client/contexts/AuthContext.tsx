import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  authModalMode: "signin" | "signup";
  setAuthModalMode: (mode: "signin" | "signup") => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"signin" | "signup">(
    "signin",
  );

  // Check for stored auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("foo-rum-user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("foo-rum-user");
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simple validation for demo purposes
    if (email && password.length >= 6) {
      const newUser: User = {
        id: Date.now().toString(),
        name: email.split("@")[0], // Use email username as name
        email,
      };

      setUser(newUser);
      localStorage.setItem("foo-rum-user", JSON.stringify(newUser));
      setShowAuthModal(false);
      return true;
    }

    return false;
  };

  const register = async (
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simple validation for demo purposes
    if (name && email && password.length >= 6) {
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
      };

      setUser(newUser);
      localStorage.setItem("foo-rum-user", JSON.stringify(newUser));
      setShowAuthModal(false);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("foo-rum-user");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    showAuthModal,
    setShowAuthModal,
    authModalMode,
    setAuthModalMode,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
