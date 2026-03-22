"use client";

import { PostCard } from "./PostCard";

type Post = {
  author: string;
  initials: string;
  time: string;
  text: string;
  variant?: "video" | "split" | "gallery" | "alert" | "text";
};

export default function SavedPostsGrid({
  posts,
}: {
  posts: Post[];
}) {
  if (!posts.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-white/50">
        <div className="text-lg font-medium mb-2">No saved posts</div>
        <p className="text-sm">Start saving posts to see them here</p>
      </div>
    );
  }

  return (
    <div
      className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        xl:grid-cols-3 
        gap-6
      "
    >
      {posts.map((post, i) => (
        <PostCard key={i} {...post} />
      ))}
    </div>
  );
}