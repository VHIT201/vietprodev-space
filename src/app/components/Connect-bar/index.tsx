import React, { useState } from "react";
import { Youtube, Instagram, Twitter, Share2 } from "lucide-react";

function ConnectBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute left-[1%] bottom-[1%] "
    >
      <div className="flex flex-row items-center space-x-2 p-2 px-4 rounded-2xl">
        <img
          src="/assets/img/discord.png"
          alt="Discord"
          className={`w-8 h-8 ${isHovered ? "animate-bounce" : ""}`}
        />
        <text
          className={`text-white text-sm transition-opacity duration-300 ${
            isHovered ? "opacity-100 animate-bounce" : "opacity-50"
          }`}
        >
          Discord
        </text>
      </div>
      {isHovered && (
        <div
          style={{ animationFillMode: "forwards" }}
          className="flex flex-row items-center space-x-4 mt-2 bg-black/40 rounded-xl px-3 py-2 animate-fadein"
        >
          <Youtube
            color="white"
            size={20}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg"
          />
          {/* TikTok SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg"
          >
            <path
              d="M33.5 6c0 5.5 4.5 10 10 10v6c-4.2 0-8.1-1.5-11-4v14.5c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c1.1 0 2.2.1 3.2.4v6.2c-.9-.3-2.1-.6-3.2-.6-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V6h7.8z"
              fill="white"
            />
          </svg>
          <Share2
            color="white"
            size={20}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ConnectBar;
