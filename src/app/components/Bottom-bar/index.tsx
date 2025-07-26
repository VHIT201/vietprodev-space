import React, { useState } from "react";
import {
  Image,
  Cloud,
  Briefcase,
  Timer,
  Music,
  ListTodo,
  BarChart,
  Book,
} from "lucide-react";
import useGlobalStore from "@/store/globalStore";
import { IconItem } from "./libs/types";


const ICONS: IconItem[] = [
  { icon: Image, label: "Theme", key: "isThemeOverlayVisible", setter: "setThemeOverlayVisible" },
  { icon: Cloud, label: "Ambience", key: "isAmbientOverlayVisible", setter: "setAmbientOverlayVisible" },
  { icon: Briefcase, label: "Track", key: "isTrackOverlayVisible", setter: "setTrackOverlayVisible" },
  { icon: Timer, label: "Pomo", key: "isPomoOverlayVisible", setter: "setPomoOverlayVisible" },
  { icon: Music, label: "Music", key: "isMusicOverlayVisible", setter: "setMusicOverlayVisible" },
  { icon: ListTodo, label: "Todo", key: "isTodoOverlayVisible", setter: "setTodoOverlayVisible" },
  { icon: BarChart, label: "Stats", key: "isStatsOverlayVisible", setter: "setStatsOverlayVisible" },
  { icon: Book, label: "Guide", key: "isGuideOverlayVisible", setter: "setGuideOverlayVisible" },
];
    
const BottomBar = () => {
  const store = useGlobalStore();
  const [hovered, setHovered] = useState(false);

  const handleSelect = (index: number) => {
    ICONS.forEach((item, i) => {
      const setter = store[item.setter] as (value: boolean) => void;
      if (i === index) {
        const currentState = store[item.key] as boolean;
        setter(!currentState); 
      } else {
        setter(false); 
      }
    });
  };

  return (
    <div className="absolute bottom-[1%] left-1/2 transform -translate-x-1/2 p-4 cursor-pointer">
      <div className="py-2 px-4 bg-gray-700 bg-opacity-50 rounded-lg shadow-lg">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-row gap-6"
        >
          {ICONS.map((item, idx) => {
            const Icon = item.icon;
            const active = store[item.key] as boolean;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-xs cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => handleSelect(idx)}
              >
                <Icon color={active ? "white" : "#666"} size={28} />
                {hovered && (
                  <span
                    className="mt-1 animate-fadein"
                    style={{
                      color: active ? "white" : "#666",
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
