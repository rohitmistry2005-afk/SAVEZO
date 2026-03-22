"use client";

import { VideoPlayer } from "./VideoPlayer";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

type PostCardProps = {
  author: string;
  initials: string;
  time: string;
  text: string;
  variant?: "video" | "split" | "gallery" | "alert" | "text";
};

export function PostCard({
  author,
  initials,
  time,
  text,
  variant = "text",
}: PostCardProps) {
  return (
    <div className="
      bg-[#0d1320] 
      border border-white/10 
      rounded-2xl 
      overflow-hidden 
      shadow-md 
      hover:shadow-lg 
      transition
    ">

      {/* 🔹 HEADER */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex gap-3 items-center">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            {initials}
          </div>

          <div>
            <div className="font-semibold text-sm text-white">
              {author}
            </div>
            <div className="text-[11px] text-white/40">
              {time}
            </div>
          </div>
        </div>

        {/* Saved Badge */}
        <button className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition">
          <Bookmark size={12} />
          unsave
        </button>
      </div>

      {/* 🔹 TEXT */}
      {variant !== "alert" && (
        <div className="px-4 pb-3 text-white/70 text-sm leading-relaxed line-clamp-3">
          {text}
        </div>
      )}

      {/* 🔹 VIDEO */}
      {variant === "video" && (
        <div className="relative">
          <VideoPlayer />

          {/* AI SAFE BADGE */}
          <div className="absolute top-3 right-3 bg-green-500 text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
            ✔ AI Safe
          </div>
        </div>
      )}

      {/* 🔹 SPLIT */}
      {variant === "split" && (
        <div className="grid grid-cols-2">
          <div className="h-40 bg-white/5 flex items-center justify-center text-2xl">
            🏛️
          </div>
          <div className="h-40 bg-white/5 flex items-center justify-center text-2xl">
            🎤
          </div>
        </div>
      )}

      {/* 🔹 GALLERY */}
      {variant === "gallery" && (
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="col-span-2 h-44 bg-white/5 flex items-center justify-center text-2xl">
            🌅
          </div>
          <div className="h-32 bg-white/5 flex items-center justify-center text-xl">
            🌊
          </div>
          <div className="h-32 bg-white/5 flex items-center justify-center text-sm">
            +4
          </div>
        </div>
      )}

      {/* 🔹 ALERT */}
      {variant === "alert" && (
        <div className="p-4 bg-red-500/10 border-t border-red-500/30">
          <h3 className="text-red-400 font-semibold text-sm mb-1">
            ⚠ Suicide Risk Detected
          </h3>

          <p className="text-xs text-white/60">
            AI detected possible self-harm related content.
          </p>

          <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 w-[73%]" />
          </div>
        </div>
      )}

      {/* 🔹 FOOTER */}
      {variant !== "alert" && (
        <div className="flex items-center justify-between px-4 py-3 text-xs text-white/50 border-t border-white/10">

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Heart size={14} /> 12.4K
            </span>

            <span className="flex items-center gap-1">
              <MessageCircle size={14} /> 1.2K
            </span>
          </div>

          <span className="text-[11px] text-white/40">
            1.2K views
          </span>
        </div>
      )}
    </div>
  );
}