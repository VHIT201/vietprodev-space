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

const icons = [
  { icon: Image, label: "Theme" },
  { icon: Cloud, label: "Ambience" },
  { icon: Briefcase, label: "Track" },
  { icon: Timer, label: "Pomo" },
  { icon: Music, label: "Music" },
  { icon: ListTodo, label: "Todo" },
  { icon: BarChart, label: "Stats" },
  { icon: Book, label: "Guide" },
];

const BottomBar = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="absolute bottom-[1%] left-[50%] transform -translate-x-1/2 p-4 cursor-pointer">
      <div className="py-2 px-4 bg-gray-700 bg-opacity-50 rounded-lg shadow-lg">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-row bg-transparent gap-6"
        >
          {icons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-xs cursor-pointer hover:scale-120 transition-transform duration-300"
              >
                <Icon color="white" size={28} />
                {hovered && (
                  <span
                    className="text-white mt-1 transition-all duration-300 opacity-0 animate-fadein"
                    style={{ animationFillMode: "forwards" }}
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
