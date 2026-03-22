"use client";

import { Message } from "@/app/messages/page";

export default function MessageBubble({
  message,
}: {
  message: Message;
}) {
  return (
    <div
      className={`flex items-end gap-2 ${
        message.fromMe ? "justify-end" : "justify-start"
      }`}
    >
      {/* 👤 Avatar (only for received messages) */}
      {!message.fromMe && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0">
          AR
        </div>
      )}

      {/* 💬 Message Bubble */}
      <div
        className={`
          px-4 py-2.5 text-sm max-w-[65%] break-words
          ${
            message.fromMe
              ? `
                bg-gradient-to-r from-blue-500 to-purple-600 
                text-white 
                rounded-2xl rounded-br-md
                shadow-md
              `
              : `
                bg-white/5 
                text-white/90 
                rounded-2xl rounded-bl-md
                border border-white/10
              `
          }
        `}
      >
        {message.text}
      </div>
    </div>
  );
} 