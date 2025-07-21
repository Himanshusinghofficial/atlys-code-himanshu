import { Heart, MessageCircle, Share } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface PostProps {
  author: string;
  timestamp: string;
  content: string;
  avatar?: string;
}

export function Post({ author, timestamp, content, avatar }: PostProps) {
  const { isAuthenticated, setShowAuthModal, setAuthModalMode } = useAuth();

  const handleInteraction = () => {
    if (!isAuthenticated) {
      setAuthModalMode("signin");
      setShowAuthModal(true);
      return;
    }
    alert("Function not implemented");
  };
  return (
    <div className="w-full max-w-2xl mx-auto bg-post-bg border border-editor-border rounded-xl p-4 md:p-6 shadow-sm">
      {/* Author Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-avatar-bg rounded-full flex items-center justify-center flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-foreground font-medium text-sm">
              {author.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-sm">{author}</h3>
          <p className="text-text-light text-xs">{timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-foreground text-sm leading-relaxed">{content}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={handleInteraction}
          className="flex items-center gap-2 p-2 hover:bg-hover-bg rounded-lg transition-colors group"
        >
          <Heart className="w-4 h-4 text-text-light group-hover:text-red-500 transition-colors" />
          <span className="hidden sm:inline text-text-light text-xs group-hover:text-red-500 transition-colors">
            Like
          </span>
        </button>

        <button
          onClick={handleInteraction}
          className="flex items-center gap-2 p-2 hover:bg-hover-bg rounded-lg transition-colors group"
        >
          <MessageCircle className="w-4 h-4 text-text-light group-hover:text-primary transition-colors" />
          <span className="hidden sm:inline text-text-light text-xs group-hover:text-primary transition-colors">
            Comment
          </span>
        </button>

        <button
          onClick={handleInteraction}
          className="flex items-center gap-2 p-2 hover:bg-hover-bg rounded-lg transition-colors group"
        >
          <Share className="w-4 h-4 text-text-light group-hover:text-primary transition-colors" />
          <span className="hidden sm:inline text-text-light text-xs group-hover:text-primary transition-colors">
            Share
          </span>
        </button>
      </div>
    </div>
  );
}
