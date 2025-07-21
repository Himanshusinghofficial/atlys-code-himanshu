import { useState } from "react";
import { Header } from "@/components/Header";
import { PostComposer } from "@/components/PostComposer";
import { Post } from "@/components/Post";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/contexts/AuthContext";

interface PostData {
  id: number;
  author: string;
  timestamp: string;
  content: string;
}

const initialPosts: PostData[] = [
  {
    id: 1,
    author: "Theresa Webb",
    timestamp: "2 mins ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    author: "John Doe",
    timestamp: "5 mins ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    author: "Jane Doe",
    timestamp: "8 mins ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
  },
];

export default function Index() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<PostData[]>(initialPosts);

  const handlePublishPost = (content: string) => {
    if (!user) return;

    const newPost: PostData = {
      id: Date.now(),
      author: user.name,
      timestamp: "just now",
      content,
    };

    setPosts([newPost, ...posts]);
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
          {/* Post Composer */}
          <PostComposer onPublishPost={handlePublishPost} />

          {/* Posts Feed */}
          <div className="space-y-3 md:space-y-4">
            {posts.map((post) => (
              <Post
                key={post.id}
                author={post.author}
                timestamp={post.timestamp}
                content={post.content}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Auth Modal */}
      <AuthModal />
    </div>
  );
}
