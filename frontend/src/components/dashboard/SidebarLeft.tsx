"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Shield,
  User,
  Bookmark,
  MessageCircle,
  Globe,
} from "lucide-react";

export function SidebarLeft() {
  const pathname = usePathname();

  const navigation = [
    { icon: <Home size={18} />, label: "Home Feed", path: "/dashboard" },
    { icon: <User size={18} />, label: "My Profile", path: "/profile" },
    {
      icon: <Shield size={18} />,
      label: "AI Detection",
      path: "/detection",
      badge: "NEW",
    },
    {
      icon: <Bookmark size={18} />,
      label: "Saved Posts",
      path: "/saved-posts",
    },
    {
      icon: <MessageCircle size={18} />,
      label: "Messages",
      path: "/messages",
      badge: "3",
    },
    {
      icon: <Globe size={18} />,
      label: "Explore",
      external: true, // ✅ mark as external
    },
  ];

  const groups = [
    { color: "bg-purple-500", name: "AI Researchers" },
    { color: "bg-blue-500", name: "Digital Safety" },
    { color: "bg-green-500", name: "Tech Founders" },
  ];

  return (
    <aside
      className="
      w-[260px] 
      h-[calc(100vh-68px)] 
      sticky top-[68px] 
      p-5 
      border-r border-white/10 
      bg-[#080c14] 
      flex flex-col justify-between
    "
    >
      {/* NAVIGATION */}
      <div>
        <p className="text-[11px] text-white/40 tracking-widest mb-3 px-2">
          NAVIGATION
        </p>

        <div className="space-y-1">
          {navigation.map((item, i) => {
            const isExternal = item.external;

            const isActive =
              !isExternal &&
              item.path &&
              (pathname === item.path ||
                pathname.startsWith(item.path));

            const baseClass = `
              flex items-center justify-between gap-3 
              px-4 py-3 rounded-xl transition
              ${
                isActive
                  ? "bg-blue-500/10 border border-blue-500/30 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }
            `;

            // 🌐 EXTERNAL (Explore)
            if (isExternal) {
              return (
                <div
                  key={i}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/search?q=AI+post+detection+post&oq=AI+post+detection+post&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRiPAtIBCTI2MTI4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
                      "_blank"
                    )
                  }
                  className={`${baseClass} cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                </div>
              );
            }

            // 🔗 INTERNAL LINKS
            return (
              <Link key={i} href={item.path!} className={baseClass}>
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>

                {item.badge && (
                  <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* GROUPS */}
        <p className="text-[11px] text-white/40 tracking-widest mt-8 mb-3 px-2">
          MY GROUPS
        </p>

        <div className="space-y-2">
          {groups.map((group, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 text-white/60"
            >
              <div className={`w-3 h-3 rounded-full ${group.color}`} />
              <span className="text-sm">{group.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI SHIELD CARD */}
      <div
        className="
        mt-6 
        rounded-xl 
        border border-blue-500/20 
        bg-blue-500/5 
        p-4
      "
      >
        <div className="flex items-center gap-2 font-semibold text-sm mb-1 text-white">
          🛡️ AI Shield Active
        </div>

        <p className="text-xs text-white/50 leading-relaxed">
          All content in your feed has passed AI safety checks.
        </p>

        <p className="text-blue-400 text-xs mt-2 font-medium">
          3 posts blocked today
        </p>
      </div>
    </aside>
  );
}