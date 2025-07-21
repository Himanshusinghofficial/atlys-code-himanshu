import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Plus,
  Paperclip,
  Smile,
  Send,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface PostComposerProps {
  onPublishPost?: (content: string) => void;
}

export function PostComposer({ onPublishPost }: PostComposerProps) {
  const { isAuthenticated, setShowAuthModal, setAuthModalMode } = useAuth();
  const [content, setContent] = useState("");

  const formatButtons = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Underline, label: "Underline" },
    { icon: List, label: "Bullet List" },
    { icon: ListOrdered, label: "Numbered List" },
    { icon: Quote, label: "Quote" },
    { icon: Code, label: "Code" },
  ];

  const handleFormatClick = () => {
    if (!isAuthenticated) {
      setAuthModalMode("signin");
      setShowAuthModal(true);
      return;
    }
    alert("Function not implemented");
  };

  const handleToolbarClick = () => {
    if (!isAuthenticated) {
      setAuthModalMode("signin");
      setShowAuthModal(true);
      return;
    }
    alert("Function not implemented");
  };

  const handlePublish = () => {
    if (!isAuthenticated) {
      setAuthModalMode("signin");
      setShowAuthModal(true);
      return;
    }

    if (content.trim()) {
      onPublishPost?.(content.trim());
      setContent("");
    }
  };

  const handleTextareaClick = () => {
    if (!isAuthenticated) {
      setAuthModalMode("signin");
      setShowAuthModal(true);
      return;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-editor-bg border border-editor-border rounded-xl p-3 md:p-4 shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center gap-1 mb-3 pb-3 border-b border-editor-border overflow-x-auto">
        <select
          onClick={handleToolbarClick}
          className="text-sm bg-transparent border-none outline-none text-foreground font-medium flex-shrink-0"
        >
          <option>Paragraph</option>
          <option>Heading 1</option>
          <option>Heading 2</option>
        </select>

        <div className="w-px h-6 bg-editor-border mx-2 flex-shrink-0" />

        <div className="flex items-center gap-1">
          {formatButtons.map((button, index) => (
            <button
              key={index}
              onClick={handleFormatClick}
              className="p-1.5 hover:bg-hover-bg rounded transition-colors flex-shrink-0"
              title={button.label}
            >
              <button.icon className="w-4 h-4 text-foreground" />
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-editor-border mx-2 flex-shrink-0" />

        <button
          onClick={handleToolbarClick}
          className="p-1.5 hover:bg-hover-bg rounded transition-colors flex-shrink-0"
          title="Add"
        >
          <Plus className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Text Area */}
      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={handleTextareaClick}
              onClick={handleTextareaClick}
              placeholder="How are you feeling today?"
              className="w-full min-h-[80px] bg-transparent border-none outline-none resize-none text-foreground placeholder:text-text-light text-sm leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-editor-border">
        <div className="flex items-center gap-2">
          <button
            onClick={handleToolbarClick}
            className="p-2 hover:bg-hover-bg rounded-lg transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-4 h-4 text-text-light" />
          </button>
          <button
            onClick={handleToolbarClick}
            className="p-2 hover:bg-hover-bg rounded-lg transition-colors"
            title="Add emoji"
          >
            <Smile className="w-4 h-4 text-text-light" />
          </button>
        </div>

        <button
          onClick={handlePublish}
          className="flex items-center justify-center w-10 h-10 bg-primary hover:bg-primary/90 rounded-full transition-colors"
        >
          <Send className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
}
