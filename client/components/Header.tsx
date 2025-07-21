import { LogIn, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const { isAuthenticated, user, logout, setShowAuthModal, setAuthModalMode } =
    useAuth();

  const handleLoginClick = () => {
    setAuthModalMode("signin");
    setShowAuthModal(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background text-xs md:text-sm font-bold">
              f
            </span>
          </div>
          <span className="text-lg md:text-xl font-semibold text-foreground">
            foo-rum
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 px-3 py-2">
                <User className="w-4 h-4 text-text-light" />
                <span className="hidden sm:inline text-sm font-medium text-foreground">
                  {user?.name}
                </span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 md:px-4 py-2 text-sm font-medium text-foreground hover:bg-hover-bg rounded-lg transition-colors"
              >
                <span className="hidden sm:inline">Logout</span>
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={handleLoginClick}
              className="flex items-center gap-2 px-3 md:px-4 py-2 text-sm font-medium text-foreground hover:bg-hover-bg rounded-lg transition-colors"
            >
              <span className="hidden sm:inline">Login</span>
              <LogIn className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
