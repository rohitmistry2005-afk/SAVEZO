"use client";

import { useState } from "react";
import { Conversation } from "@/app/messages/page";
import MessageBubble from "./MessageBubble";
import {
  Phone,
  Video,
  Info,
  Smile,
  Image,
  Paperclip,
  Send,
} from "lucide-react";

export default function ChatWindow({
  conversation,
  onSend,
}: {
  conversation: Conversation;
  onSend: (text: string) => void;
}) {
  const [text, setText] = useState("");

  return (
    <div className="flex-1 flex flex-col h-full bg-[#080c14]">

      {/* 🔥 HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d1320]">

        {/* LEFT: USER */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
            {conversation.initials}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">
                {conversation.name}
              </span>

              <span className="text-[10px] px-2 py-[2px] rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-medium">
                ✓ Verified
              </span>
            </div>

            <div className="text-xs text-green-400 flex items-center gap-1 mt-[2px]">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Active now
            </div>
          </div>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-2">
          {[Phone, Video, Info].map((Icon, i) => (
            <button
              key={i}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Icon size={16} className="text-white/80" />
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 MESSAGES */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 bg-[#080c14]">
        {conversation.messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* 🔥 INPUT BAR */}
      <div className="px-6 py-4 border-t border-white/10 bg-[#0d1320]">

        <div className="flex items-center gap-3">

          {/* LEFT ICONS */}
          {[Paperclip, Image, Smile].map((Icon, i) => (
            <button
              key={i}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Icon size={16} className="text-white/70" />
            </button>
          ))}

          {/* INPUT */}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Aa"
            className="
              flex-1 px-5 py-3 rounded-full
              bg-white/5 border border-white/10
              outline-none text-sm text-white
              placeholder:text-white/40
              focus:border-blue-500/40
              transition
            "
          />

          {/* SEND BUTTON */}
          <button
            onClick={() => {
              if (!text.trim()) return;
              onSend(text);
              setText("");
            }}
            className="
              w-11 h-11 rounded-full
              bg-gradient-to-r from-blue-500 to-purple-600
              flex items-center justify-center
              text-white shadow-lg
              hover:scale-105 active:scale-95
              transition
            "
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}