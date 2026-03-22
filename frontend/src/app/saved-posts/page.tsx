"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { PostCard } from "@/components/dashboard/PostCard";

export default function SavedPostsPage() {
  const [search, setSearch] = useState("");

  const posts = [
    {
      author: "Tech Insider",
      initials: "TI",
      time: "2 hours ago",
      text: "Understanding Deepfakes: How AI is changing media...",
      variant: "text" as const,
    },
    {
      author: "Mia Chen",
      initials: "MC",
      time: "2 hours ago",
      text: "Urban Gardening Techniques",
      variant: "video" as const,
    },
    {
      author: "Liam Smith",
      initials: "LS",
      time: "1 hour ago",
      text: "A New Perspective",
      variant: "split" as const,
    },
    {
      author: "Ava Rodriguez",
      initials: "AR",
      time: "2 hours ago",
      text:
        "Ethical AI Principles: transparency, accountability, fairness...",
      variant: "text" as const,
    },
    {
      author: "Alex Rivera",
      initials: "AR",
      time: "2 hours ago",
      text: "Incredible drone footage I captured over the city last night",
      variant: "video" as const,
    },
    {
      author: "Liam Smith",
      initials: "LS",
      time: "2 hours ago",
      text:
        "Incredible drone footage! This perspective is stunning...",
      variant: "gallery" as const,
    },
  ];

  return (
    <div className="flex h-[calc(100vh-68px)] bg-[#080c14] text-white">

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1 px-8 py-6 overflow-y-auto">

        {/* 🔥 HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">
            Saved Posts <span className="text-white/50">(24 Items)</span>
          </h1>

          {/* 🔍 FILTER BAR */}
          <div className="flex flex-wrap items-center gap-4">

            {/* SEARCH */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="
                  pl-9 pr-4 py-2 rounded-lg
                  bg-white/5 border border-white/10
                  text-sm text-white placeholder:text-white/40
                  outline-none
                "
              />
            </div>

            {/* FILTER */}
            <select className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white">
              <option>All (Post, Video, Image)</option>
              <option>Posts</option>
              <option>Videos</option>
              <option>Images</option>
            </select>

            {/* SORT */}
            <select className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white">
              <option>Recently Saved</option>
              <option>Most Liked</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          xl:grid-cols-3 
          gap-6
        ">
          {posts.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>

      </div>

      {/* 🔹 RIGHT SIDEBAR (OPTIONAL LIKE SCREENSHOT) */}
      <div className="hidden xl:block w-[280px] border-l border-white/10 p-6">

        {/* Suggested */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-4 text-white/80">
            Suggested for You
          </h3>

          <div className="space-y-4 text-sm">
            {["Zara Mitchell", "James Park", "Layla Noor"].map((name, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-white/70">{name}</span>
                <button className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-white/80">
            Trending Topics
          </h3>

          <div className="space-y-3 text-sm text-white/60">
            <div>#DeepfakeDetection</div>
            <div>#ContentModeration</div>
            <div>#MentalHealth</div>
            <div>#DigitalWellbeing</div>
            <div>#SafeSocialMedia</div>
          </div>
        </div>

      </div>

    </div>
  );
}