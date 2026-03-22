"use client";

import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
};

export default function SavedPostsToolbar({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-4">

      {/* 🔍 SEARCH */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search saved posts..."
          className="
            pl-9 pr-4 py-2 rounded-lg
            bg-white/5 border border-white/10
            text-sm text-white placeholder:text-white/40
            outline-none
            focus:border-blue-500/40
            transition
          "
        />
      </div>

      {/* 🎛️ FILTER */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="
          px-4 py-2 rounded-lg
          bg-white/5 border border-white/10
          text-sm text-white
          outline-none
          focus:border-blue-500/40
          transition
        "
      >
        <option value="all">All (Post, Video, Image)</option>
        <option value="text">Posts</option>
        <option value="video">Videos</option>
        <option value="image">Images</option>
      </select>

      {/* 🔄 SORT */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="
          px-4 py-2 rounded-lg
          bg-white/5 border border-white/10
          text-sm text-white
          outline-none
          focus:border-blue-500/40
          transition
        "
      >
        <option value="recent">Recently Saved</option>
        <option value="liked">Most Liked</option>
        <option value="oldest">Oldest</option>
      </select>

    </div>
  );
}