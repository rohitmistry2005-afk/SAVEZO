"use client";

import { useState } from "react";
import NotificationItem from "./NotificationItem";
import { getMockNotifications } from "@/services/notificationService";
import { Notification } from "@/types/notification";

export default function NotificationDropdown() {
  const [notifications, setNotifications] =
    useState<Notification[]>(getMockNotifications());

  const markAllRead = () => {
    const updated = notifications.map((n) => ({
      ...n,
      read: true,
    }));
    setNotifications(updated);
  };

  return (
    <div className="absolute right-0 mt-3 w-80 rounded-xl bg-card border border-border shadow-2xl z-50 transition-colors duration-300">

      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h4 className="font-semibold text-foreground">
          Notifications
        </h4>

        <button
          onClick={markAllRead}
          className="text-sm text-primary hover:underline"
        >
          Mark all read
        </button>
      </div>

      {/* LIST */}
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((n) => (
          <NotificationItem key={n.id} notification={n} />
        ))}
      </div>
    </div>
  );
}