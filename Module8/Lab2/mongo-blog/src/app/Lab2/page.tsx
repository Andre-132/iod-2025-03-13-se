"use client";

import React, { useState } from "react";
import { Heart, MessageCircle, User } from "lucide-react";

interface Comment {
  id: number;
  username: string;
  text: string;
}

interface Post {
  id: number;
  username: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
}

const BlogApp: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      username: "john_doe",
      title: "Getting Started with React",
      description:
        "React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the basics of React and how to create your first component.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      likes: 12,
      liked: false,
      comments: [
        {
          id: 1,
          username: "sarah_dev",
          text: "Great introduction! Very helpful for beginners.",
        },
        {
          id: 2,
          username: "mike_coder",
          text: "Thanks for sharing this. Looking forward to more React content!",
        },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState<Record<number, string>>({});

  const handleLike = (postId: number): void => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleAddComment = (postId: number, text: string): void => {
    if (!text.trim()) return;

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  username: "current_user",
                  text: text.trim(),
                },
              ],
            }
          : post
      )
    );

    setNewComment({ ...newComment, [postId]: "" });
  };

  const handleCommentChange = (postId: number, value: string): void => {
    setNewComment({ ...newComment, [postId]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Simple Blog</h1>
          <p className="text-gray-600 mt-2">
            Share your thoughts and connect with others
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">
                      @{post.username}
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {post.image && (
                <div className="px-6 pb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
                      post.liked
                        ? "bg-red-50 text-red-600 hover:bg-red-100"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${post.liked ? "fill-current" : ""}`}
                    />
                    <span className="font-medium">{post.likes}</span>
                  </button>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{post.comments.length}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                {post.comments.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {post.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-gray-50 rounded-lg p-3"
                      >
                        <p className="font-semibold text-sm text-gray-900 mb-1">
                          @{comment.username}
                        </p>
                        <p className="text-gray-700 text-sm">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment[post.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddComment(post.id, newComment[post.id]);
                      }
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() =>
                      handleAddComment(post.id, newComment[post.id])
                    }
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                  >
                    Post
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © 2025 Simple Blog. Made with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogApp;
