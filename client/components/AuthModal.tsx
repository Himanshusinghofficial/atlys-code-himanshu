import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export function AuthModal() {
  const {
    showAuthModal,
    setShowAuthModal,
    authModalMode,
    setAuthModalMode,
    login,
    register,
  } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let success = false;

      if (authModalMode === "signin") {
        success = await login(formData.email, formData.password);
        if (!success) {
          setError("Invalid email or password. Please try again.");
        }
      } else {
        success = await register(
          formData.name,
          formData.email,
          formData.password,
        );
        if (!success) {
          setError("Registration failed. Please check your details.");
        }
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleMode = () => {
    setAuthModalMode(authModalMode === "signin" ? "signup" : "signin");
    setFormData({ name: "", email: "", password: "" });
    setError("");
  };

  const closeModal = () => {
    setShowAuthModal(false);
    setFormData({ name: "", email: "", password: "" });
    setError("");
  };

  if (!showAuthModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 hover:bg-hover-bg rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-text-light" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {authModalMode === "signin" ? "Sign In" : "Sign Up"}
          </h2>
          <p className="text-text-light text-sm">
            {authModalMode === "signin"
              ? "Welcome back to foo-rum"
              : "Join the foo-rum community"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authModalMode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={6}
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {authModalMode === "signin" ? "Signing In..." : "Signing Up..."}
              </>
            ) : authModalMode === "signin" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-text-light text-sm">
            {authModalMode === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              onClick={toggleMode}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {authModalMode === "signin" ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
